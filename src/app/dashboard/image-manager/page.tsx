"use client";

import { Button } from "@/components/ui/button";
import { useImageDialogStore } from "@/store/Dialog/useImageDialogStore";

import { ImageList } from "./_components/ImageList";
import { ImageUploadDialog } from "./_components/ImageUploadDialog";

const ImageManagerPage = () => {
  const { openDialog } = useImageDialogStore();

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">圖片管理</h1>
        <Button onClick={() => openDialog()}>新增圖片</Button>
      </div>
      <ImageList />
      <ImageUploadDialog />
    </div>
  );
};

export default ImageManagerPage;
