"use client";

import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import { useHotelImagesQuery } from "@/hooks/react-query/useImageQuery";

import { SortableImageCard } from "./SortableImageCard";

export const ImageList = () => {
  const { data, isLoading } = useHotelImagesQuery();
  const fetchedImages = data?.images ?? [];

  const [images, setImages] = useState<typeof fetchedImages>([]);
  const [overId, setOverId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (fetchedImages.length > 0 && images.length === 0) {
      setImages(fetchedImages);
    }
  }, [fetchedImages, images.length]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    setOverId(null);
    if (active.id !== over?.id) {
      const oldIndex = images.findIndex((img) => img.id === active.id);
      const newIndex = images.findIndex((img) => img.id === over?.id);
      setImages(arrayMove(images, oldIndex, newIndex));
    }
  };

  const activeImage = images.find((img) => img.id === activeId);

  if (isLoading) return <p>載入中...</p>;
  if (!images || images.length === 0) return <p>目前尚無圖片</p>;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => setActiveId(active.id as string)}
      onDragOver={({ over }) => setOverId(over?.id?.toString() ?? null)}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={images.map((img) => img.id)} strategy={verticalListSortingStrategy}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <SortableImageCard key={img.id} image={img} isOver={overId === img.id} isDragging={activeId === img.id} />
          ))}
        </div>
      </SortableContext>

      <DragOverlay adjustScale={true}>
        {activeImage ? <SortableImageCard image={activeImage} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};
