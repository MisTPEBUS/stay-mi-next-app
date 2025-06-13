"use client";

import { DndContext, closestCenter, DragEndEvent, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import { useHotelImagesQuery } from "@/hooks/react-query/useImageQuery";

import { SortableImageCard } from "./SortableImageCard"; // 請用 useSortable 改寫的 ImageCard

export const ImageList = () => {
  const { data, isLoading } = useHotelImagesQuery();
  const fetchedImages = data?.images ?? [];

  const [images, setImages] = useState<typeof fetchedImages>([]);

  // 只在第一次有資料時初始化 images，避免 useEffect 死循環
  useEffect(() => {
    if (fetchedImages.length > 0 && images.length === 0) {
      setImages(fetchedImages);
    }
  }, [fetchedImages, images.length]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = images.findIndex((img) => img.id === active.id);
      const newIndex = images.findIndex((img) => img.id === over?.id);
      setImages(arrayMove(images, oldIndex, newIndex));
    }
  };

  if (isLoading) return <p>載入中...</p>;
  if (!images || images.length === 0) return <p>目前尚無圖片</p>;

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={images.map((img) => img.id)} strategy={verticalListSortingStrategy}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <SortableImageCard key={img.id} image={img} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};
