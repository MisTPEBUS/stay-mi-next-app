"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { UserProfileApi } from "@/api/services/user/userInfo";
import FormRender from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { UpdatePasswordSchema, UpdatePasswordSchemaType } from "@/schema/userProfile.dto";
import { useAuthStore } from "@/store/useAuthStore";

import { changePasswordFields, ChangePasswordFieldType } from "../../changePasswordFields";
const ChangePasswordForm = () => {
  const router = useRouter();
  const form = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const { clearUser } = useAuthStore();

  const onSubmit = async (values: UpdatePasswordSchemaType) => {
    try {
      await UserProfileApi.changePassword(values);

      clearUser();
      form.reset();
      toast.success("密碼修改成功");
      router.push("/login");
    } catch (err) {
      toast.error((err as Error).message);
    }
  };

  return (
    <div className="bg-white-pure w-full rounded-2xl p-12 px-6 shadow-md md:w-sm">
      <h2 className="mb-6 text-center font-bold">修改密碼</h2>
      <div className="flex flex-col gap-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormRender<ChangePasswordFieldType> FormFields={changePasswordFields} />
            <Button type="submit" className="mt-6 w-full md:flex">
              確認修改
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
