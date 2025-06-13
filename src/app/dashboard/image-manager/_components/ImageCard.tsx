// ImageCard.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteHotelImageMutation } from "@/hooks/react-query/useImageQuery";

type Props = {
  image: {
    id: string;
    image_url: string;
    name?: string;
  };
};

export const ImageCard = ({ image }: Props) => {
  const { mutate } = useDeleteHotelImageMutation();
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border shadow-sm">
      <Image src={image.image_url} alt={image.name ?? "圖片"} className="h-48 w-full object-cover" />
      <div className="flex justify-between p-2">
        <p className="truncate text-sm">{image.name ?? image.image_url}</p>
        <Button variant="destructive" size="sm" onClick={() => setConfirm(true)}>
          刪除
        </Button>
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
            <Button variant="destructive" onClick={() => mutate(image.id)}>
              確認
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
