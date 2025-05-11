"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserProfileQuery } from "@/hooks/react-query/useUserProfileQuery";

const ProfileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  gender: z.string(),
  birthday: z.string(),
});
type ProfileSchemaType = z.infer<typeof ProfileSchema>;

const ProfileForm = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const { data, isLoading, isError } = useUserProfileQuery();

  const methods = useForm<ProfileSchemaType>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      birthday: "",
    },
  });

  const { handleSubmit, reset, register } = methods;

  useEffect(() => {
    if (data?.user) {
      reset({
        name: data.user.name ?? "",
        email: data.user.email ?? "",
        phone: data.user.phone ?? "",
      });
    }
  }, [data, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatar(url);
    }
  };

  const onSubmit = (formData: ProfileSchemaType) => {
    console.log("送出表單", formData);
    // TODO: 可接上 useMutation 傳送更新資料
  };

  if (isLoading) return <p>載入中...</p>;
  if (isError || !data) return <p>資料載入失敗</p>;

  return (
    <FormProvider {...methods}>
      <form className="bg-white-pure mx-auto max-w-4xl rounded p-6" onSubmit={handleSubmit(onSubmit)}>
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
            </div>
            <div className="w-full">
              <Input type="file" accept="image/*" onChange={handleFileChange} />
            </div>

            <Button variant="outline"> 更換照片</Button>
          </div>

          {/* 表單欄位 */}
          <div className="space-y-4 md:col-span-2">
            <div className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">姓名：</Label>
              <Input className="col-span-4" type="text" {...register("name")} />
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">Email：</Label>
              <Input className="col-span-4" type="email" {...register("email")} />
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">手機：</Label>
              <Input className="col-span-4" type="tel" {...register("phone")} />
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">密碼</Label>
              <Link href="/account/profile/change-password" passHref>
                <Button size="sm" asChild>
                  <span>修改</span>
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-5 items-center justify-end gap-2">
              <Button type="submit">儲存</Button>
              <Button variant="outline">取消</Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
