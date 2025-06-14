"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteHotelImageMutation } from "@/hooks/react-query/useImageQuery";
import { cn } from "@/lib/utils";

type Props = {
  image: {
    id: string;
    image_url: string;
    name?: string;
  };
  isOver?: boolean;
  isDragging?: boolean;
  isOverlay?: boolean;
  onDelete?: () => void; // 接收外部刪除函式（建議）
};

export const SortableImageCard = ({ image, isOver, isDragging, isOverlay }: Props) => {
  const [confirm, setConfirm] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: image.id });
  const { mutate } = useDeleteHotelImageMutation();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isOverlay ? 50 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={isOverlay ? undefined : style}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-200",
        isOver && !isOverlay && "ring-primary border-primary bg-primary/5 ring-2",
        isDragging && !isOverlay && "opacity-50",
        isOverlay && "border-primary pointer-events-none scale-105 shadow-xl ring-2"
      )}
    >
      {/* 拖曳區塊只包圖片，不含按鈕 */}
      <div className="relative h-48 w-full">
        <div
          className="h-full w-full cursor-grab"
          {...(!isOverlay ? attributes : {})}
          {...(!isOverlay ? listeners : {})}
        >
          <Image
            src={image.image_url}
            alt={image.name ?? "圖片"}
            width={300}
            height={200}
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* 按鈕不放入 drag 監聽區 */}
        {!isOverlay && (
          <Button
            variant="destructive"
            size="sm"
            className="absolute right-2 bottom-2 z-20"
            onClick={(e) => {
              e.stopPropagation(); // 阻止 drag start
              setConfirm(true);
            }}
          >
            刪除
          </Button>
        )}
      </div>

      <Dialog open={confirm} onOpenChange={setConfirm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>確認刪除？</DialogTitle>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setConfirm(false)}>
              取消
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setConfirm(false);
                mutate(image.id);
              }}
            >
              確認
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
