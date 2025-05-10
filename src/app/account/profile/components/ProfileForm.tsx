"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/useAuthStore";

const ProfileForm = () => {
  const user = useAuthStore((state) => state.user);
  console.log(user);
  const [avatar, setAvatar] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  return (
    <form className="bg-white-pure mx-auto max-w-4xl rounded border p-6 shadow-sm">
      <h2 className="mb-4 text-center text-lg font-semibold">我的帳戶</h2>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-6">
        {/* 頭像上傳 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border bg-gray-100 text-sm text-gray-400">
            {avatar ? (
              <Image
                src={avatar}
                alt="頭像預覽"
                width={128}
                height={128}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <>圖片</>
            )}
          </div>
          <div className="w-full">
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <Button variant="outline"> 更換照片</Button>
        </div>

        {/*  表單 */}
        <div className="space-y-4 md:col-span-2">
          {[
            { label: "姓名", type: "text", defaultValue: "Lobinda", require: true },
            { label: "Email", type: "email", defaultValue: "lobinda@gmail.com", require: true },
            { label: "手機", type: "tel", defaultValue: "0912345678", require: true },
            { label: "密碼", type: "password", defaultValue: "", require: false },
            { label: "性別", type: "text", defaultValue: "男", require: true },
            { label: "生日", type: "date", defaultValue: "2000-01-01", require: true },
          ].map(({ label, type, defaultValue }, i) => (
            <div key={i} className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">{label}：</Label>

              <Input className="col-span-4" type={type} defaultValue={defaultValue} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button type="submit" variant="default">
          儲存
        </Button>
        <Link href="/account/profile/change-password" passHref>
          <Button asChild variant="default">
            <span>修改密碼</span>
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default ProfileForm;
