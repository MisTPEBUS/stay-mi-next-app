"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserProfileQuery } from "@/hooks/react-query/useUserProfileQuery";

const ProfileForm = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { data, isLoading, isError } = useUserProfileQuery();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  if (isLoading) return <p>載入中...</p>;
  if (isError || !data) return <p>資料載入失敗</p>;

  return (
    <form className="bg-white-pure mx-auto max-w-4xl rounded p-6">
      <h2 className="text-xl font-bold">我的帳戶</h2>
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
            {JSON.stringify(data)}
          </div>
          <div className="w-full">
            <Input type="file" accept="image/*" onChange={handleFileChange} />
          </div>
          <Button variant="outline"> 更換照片</Button>
        </div>

        {/* 表單欄位 */}
        <div className="space-y-4 md:col-span-2">
          {[
            { label: "姓名", type: "text", value: data.name },
            { label: "Email", type: "email", value: data.email },
            { label: "手機", type: "tel", value: data.phone },
            { label: "性別", type: "text", value: data.gender },
            { label: "生日", type: "date", value: data.birthday },
          ].map(({ label, type, value }, i) => (
            <div key={i} className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">{label}：</Label>
              <Input className="col-span-4" type={type} defaultValue={value} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Button type="submit">儲存</Button>
        <Link href="/account/profile/change-password" passHref>
          <Button asChild>
            <span>修改密碼</span>
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default ProfileForm;
