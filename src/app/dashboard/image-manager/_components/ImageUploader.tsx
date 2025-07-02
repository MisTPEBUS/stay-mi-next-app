"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUploadImageMutation } from "@/hooks/react-query/useUploadImageMutation";

type ImageUploaderProps = {
  value?: string | string[];
  onChange?: (urls: string[]) => void;
};
const normalizeToArray = (input: string | string[] | undefined): string[] => {
  if (!input) return [];
  if (typeof input === "string") return input.trim() ? [input] : [];
  return input.filter((url) => typeof url === "string" && url.trim());
};

export const ImageUploader = ({ value = [], onChange }: ImageUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadedUrls, setUploadedUrls] = useState<string[]>(normalizeToArray(value));
  const { mutateAsync: uploadMutateAsync } = useUploadImageMutation();

  const MAX_FILE_SIZE = 1024 * 1024;
  const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const validFiles = selected.filter((file) => file.size <= MAX_FILE_SIZE && ACCEPTED_TYPES.includes(file.type));
    setFiles((prev) => [...prev, ...validFiles]);
  };

  const emitChange = (urls: string[]) => {
    const clean = urls.filter((url) => typeof url === "string" && url.trim());
    setUploadedUrls(clean);
    onChange?.(clean);
  };
  const handleUpload = async () => {
    const newUrls: string[] = [];
    for (const file of files) {
      try {
        const url = await uploadMutateAsync(file);
        //  const imageUrl = response?..data?.image?.url;
        if (url) newUrls.push(url);
      } catch (err) {
        console.error("上傳失敗", err);
      }
    }

    const updated = [...uploadedUrls, ...newUrls];
    setUploadedUrls(updated);
    emitChange(updated);
    setFiles([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const removeImage = (url: string) => {
    const updated = uploadedUrls.filter((u) => u !== url);
    emitChange(updated);
  };

  return (
    <div className="space-y-4">
      <Input multiple type="file" accept="image/png,image/jpeg,image/jpg" ref={inputRef} onChange={handleFileChange} />
      <Button onClick={handleUpload} disabled={files.length === 0} type="button">
        上傳
      </Button>

      <div className="grid grid-cols-3 gap-2">
        {uploadedUrls
          .filter((url): url is string => Boolean(url && url.trim()))
          .map((url) => {
            return (
              <div key={url} className="relative h-32 w-32 overflow-hidden rounded border">
                <Image
                  src={url}
                  alt="uploaded"
                  fill
                  className="object-cover"
                  unoptimized // Cloudinary 圖片需要這個
                />
                <button
                  type="button"
                  onClick={() => removeImage(url)}
                  className="bg-opacity-50 absolute top-0 right-0 rounded-bl bg-black p-1 text-xs text-white"
                >
                  ×
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
