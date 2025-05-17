"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
      setEmail(data.user.email);
      reset({
        name: data.user.name ?? "",
        birthday: data.user.birthday ?? "",
        phone: data.user.phone ?? "",
        gender: "m",
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
      <form className="bg-white-pure mx-auto max-w-4xl rounded p-6" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold">我的帳戶</h2>
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

          <div className="space-y-4 md:col-span-2">
            {!isEditing ? (
              <Button size="sm" onClick={() => setIsEditing(true)}>
                編輯表單
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button size="sm" type="submit" disabled={isPending}>
                  {isPending ? "儲存中..." : "儲存"}
                </Button>
                <Button size="sm" type="button" onClick={() => setIsEditing(false)}>
                  取消
                </Button>
              </div>
            )}

            <div className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">Email：</Label>
              <span className="col-span-4">{email}</span>
            </div>

            <div className="grid grid-cols-5 items-start gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">姓名：</Label>
              <div className="col-span-4">
                {!isEditing ? (
                  <h6 className="my-3">{getValues("name")}</h6>
                ) : (
                  <>
                    <Input type="text" {...register("name")} />
                    {errors.name && <p className="text-destructive mt-1 text-sm">{errors.name.message as string}</p>}
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-5 items-start gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">手機：</Label>
              <div className="col-span-4">
                {!isEditing ? (
                  <h6 className="my-3">{getValues("phone")}</h6>
                ) : (
                  <>
                    <Input type="tel" {...register("phone")} />
                    {errors.phone && <p className="text-destructive mt-1 text-sm">{errors.phone.message as string}</p>}
                  </>
                )}
              </div>
            </div>
            <div className="grid grid-cols-5 items-center gap-2">
              <Label className="col-span-1 text-right text-sm font-medium">密碼：</Label>
              <Link href="/account/profile/change-password" passHref>
                <Button size="sm">修改密碼</Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
