// ImageUploadDialog.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateHotelImageMutation } from "@/hooks/react-query/useImageQuery";
import { useUploadImageMutation } from "@/hooks/react-query/useUploadImageMutation";
import { useImageDialogStore } from "@/store/Dialog/useImageDialogStore";

export const ImageUploadDialog = () => {
  const { open, closeDialog } = useImageDialogStore();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutateAsync: uploadMutateAsync } = useUploadImageMutation();
  const { mutate: createHotelImage } = useCreateHotelImageMutation();

  const MAX_FILE_SIZE = 1024 * 1024; // 1MB
  const ACCEPTED_TYPES = ["image/png", "image/jpeg"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const validFiles = selected.filter((file) => {
      const isValidSize = file.size <= MAX_FILE_SIZE;
      const isValidType = ACCEPTED_TYPES.includes(file.type);
      return isValidSize && isValidType;
    });

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleUpload = async () => {
    const newUrls: string[] = [];

    for (const file of files) {
      try {
        const url = await uploadMutateAsync(file);
        /* const url =
          "https://res.cloudinary.com/dwq2ehew4/image/upload/v1748775258/stay-mi/image/a354e85b-1693-443b-bee2-37d4c62b1308/40f7b4272c4977c2beb538b7428aa75c.jpg"; */
        if (url) newUrls.push(url);
      } catch (err) {
        console.error("上傳失敗", err);
      }
    }

    setUploadedUrls((prev) => [...prev, ...newUrls]);
    setFiles([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeImage = (url: string) => {
    setUploadedUrls((prev) => prev.filter((u) => u !== url));
  };

  const handleSubmit = () => {
    uploadedUrls.forEach((url) => {
      createHotelImage({ image_url: url, is_cover: false, position: 0 });
    });
    closeDialog();
  };

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent className="bg-white-pure flex max-w-xl flex-col rounded-3xl">
        <DialogHeader>
          <DialogTitle>新增圖片</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input multiple type="file" accept="image/png,image/jpeg" ref={inputRef} onChange={handleFileChange} />

          <Button onClick={handleUpload} disabled={files.length === 0}>
            {"上傳"}
          </Button>

          <div className="grid grid-cols-3 gap-2">
            {uploadedUrls.map((url) => (
              <div key={url} className="relative">
                <div className="relative h-48 w-full overflow-hidden rounded">
                  <Image src={url} alt="uploaded" fill className="object-cover" />
                </div>
                <button
                  onClick={() => removeImage(url)}
                  className="bg-opacity-50 absolute top-0 right-0 rounded-bl bg-black p-1 text-xs text-white"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={uploadedUrls.length === 0}>
            送出
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
