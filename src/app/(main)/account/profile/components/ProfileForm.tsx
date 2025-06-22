"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Key, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserProfileMutation } from "@/hooks/react-query/useUserProfileMutation";
import { useUserProfileQuery } from "@/hooks/react-query/useUserProfileQuery";
import { UpdateUserProfileReqSchema, UpdateUserProfileReqSchemaType } from "@/schema/userProfile.dto";

const ProfileForm = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const { data, isLoading, isError } = useUserProfileQuery();
  const { mutate, isPending } = useUserProfileMutation();

  const methods = useForm<UpdateUserProfileReqSchemaType>({
    resolver: zodResolver(UpdateUserProfileReqSchema),
    defaultValues: {
      name: "",
      role: "",
      phone: "",
      gender: "",
      birthday: "",
    },
  });

  const {
    handleSubmit,
    reset,
    register,
    getValues,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (data?.user) {
      setEmail(data.user.email ?? "");
      setGender(data.user.gender ?? "");
      reset({
        name: data.user.name ?? "",
        birthday: data.user.birthday ?? "",
        phone: data.user.phone ?? "",
        gender: data.user.gender ?? "",
        role: "consumer",
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

  const onSubmit = (formData: UpdateUserProfileReqSchemaType) => {
    mutate(formData, {
      onSuccess: () => {
        setIsEditing(false);
        reset(formData);
      },
    });
  };

  if (isLoading) return <p>載入中...</p>;
  if (isError || !data) return <p>資料載入失敗</p>;

  return (
    <FormProvider {...methods}>
      <form className="bg-white-pure w-full rounded-2xl p-4 md:p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xl font-bold md:text-2xl">個人資料</span>
          <div className="hidden gap-5 md:flex">
            <Link href="/account/profile/change-password" className="flex gap-2">
              <Key className="m-1 size-5" />
              變更密碼
            </Link>
            <div className="flex cursor-pointer gap-2" onClick={() => setIsEditing(true)}>
              <SquarePen className="m-1 size-5" />
              編輯個人資料
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-6">
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
            <Button variant="outline">更換照片</Button>
          </div>
          <div className="md:col-span-2">
            <div className="border-gray-light/50 mb:pb-6 flex flex-col gap-2 border-b pb-4">
              <Label className="font-bold md:text-xl">姓名</Label>
              <p>
                {!isEditing ? (
                  <>{getValues("name")}</>
                ) : (
                  <>
                    <Input type="text" {...register("name")} />
                    {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name.message as string}</p>}
                  </>
                )}
              </p>
            </div>
            <div className="border-gray-light/50 flex flex-col gap-2 border-b py-4 md:py-6">
              <Label className="font-bold md:text-xl">Email</Label>
              <p>{email}</p>
            </div>
            <div className="border-gray-light/50 flex flex-col gap-2 border-b py-4 md:py-6">
              <p className="font-bold md:text-xl">手機號碼</p>
              <p>
                {!isEditing ? (
                  <>{getValues("phone")}</>
                ) : (
                  <>
                    <Input type="tel" {...register("phone")} />
                    {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone.message as string}</p>}
                  </>
                )}
              </p>
            </div>
            <div className="border-gray-light/50 flex flex-col gap-2 border-b py-4 md:py-6">
              <p className="font-bold md:text-xl">性別</p>
              <p>{gender === "m" ? "男" : "女"}</p>
            </div>
            <div className="border-gray-light/50 flex flex-col gap-2 py-4 md:py-6">
              <p className="font-bold md:text-xl">生日</p>
              <p>
                {!isEditing ? (
                  <>{getValues("birthday")}</>
                ) : (
                  <>
                    <Input type="text" {...register("birthday")} />
                    {errors.birthday && (
                      <p className="text-destructive mt-1 text-sm">{errors.birthday.message as string}</p>
                    )}
                  </>
                )}
              </p>
            </div>
            {!isEditing && (
              <div className="mt-2 flex gap-2 md:hidden">
                <Button variant="outline" size="square" asChild>
                  <Link href="/account/profile/change-password">
                    <Key className="m-1 size-5" />
                    變更密碼
                  </Link>
                </Button>
                <Button variant="outline" size="square" onClick={() => setIsEditing(true)}>
                  <SquarePen className="m-1 size-5" />
                  編輯個人資料
                </Button>
              </div>
            )}
            {isEditing && (
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  type="button"
                  className="flex-1 md:flex-0"
                  onClick={() => setIsEditing(false)}
                >
                  取消
                </Button>
                <Button type="submit" className="flex-1 md:flex-0" disabled={isPending}>
                  {isPending ? "儲存中..." : "儲存"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
