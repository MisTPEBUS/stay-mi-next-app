"use client";

import { UserIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

import { useUploadImageMutation } from "@/hooks/react-query/useUploadImageMutation";

type UploaderProps = {
  name: string;
};

export const Uploader = ({ name }: UploaderProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { setValue, watch, trigger } = useFormContext();
  const { mutateAsync } = useUploadImageMutation();

  const imageUrl = watch(name);

  useEffect(() => {
    if (imageUrl && typeof imageUrl === "string" && imageUrl.startsWith("http")) {
      setPreview(imageUrl);
      setValue(name, imageUrl); // optional fallback
    }
  }, [imageUrl, name, setValue]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(selected.type)) {
      toast.error("僅支援 JPG / PNG / WEBP 格式");
      return;
    }

    if (selected.size > 3 * 1024 * 1024) {
      toast.error("圖片大小不可超過 3MB");
      return;
    }

    try {
      const url = await mutateAsync(selected);
      setPreview(url);
      setValue(name, url, { shouldDirty: true, shouldValidate: true });
      trigger(name);
      toast.success("圖片上傳成功");
    } catch {
      toast.error("圖片上傳失敗");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <p className="cursor-pointer text-sm hover:underline" onClick={() => fileRef.current?.click()}>
        點擊頭像編輯
      </p>

      <div
        onClick={() => fileRef.current?.click()}
        className="relative h-64 w-64 cursor-pointer overflow-hidden rounded-xl border border-white/30 bg-gray-800 shadow-md transition hover:shadow-lg"
      >
        {preview ? (
          <Image key={preview} src={preview} alt="頭像預覽" className="object-cover" fill unoptimized />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white">
            <UserIcon className="h-16 w-16 opacity-60" />
          </div>
        )}
      </div>

      <input ref={fileRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
    </div>
  );
};
