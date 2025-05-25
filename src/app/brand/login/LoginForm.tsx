"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormRender } from "@/components/FormRender";
import DemoFillButton, { DemoFieldItem } from "@/components/common/DemoFillButton";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/hooks/react-query/useLoginMutation";
import { LoginRequestSchema, LoginRequestSchemaType, StoreLoginRequestSchemaType } from "@/schema/auth.dto";
import { useLoginStore } from "@/store/useLoginStore";

import RegisterHint from "../../(main)/(auth)/login/_components/RegisterHint";

import { loginFields, LoginFieldType } from "./loginFields";

const demoData: DemoFieldItem[] = [{ email: "ya-two@gmail.com" }, { password: "11111111" }];

const LoginForm = () => {
  const { rememberMe, email: rememberedEmail } = useLoginStore();

  const methods = useForm<StoreLoginRequestSchemaType>({
    resolver: zodResolver(LoginRequestSchema),
    defaultValues: {
      email: rememberMe ? rememberedEmail : "",
      password: "",
    },
  });

  const { handleSubmit, setValue } = methods;

  useEffect(() => {
    setValue("email", rememberMe ? rememberedEmail : "");
  }, [rememberMe, rememberedEmail, setValue]);

  const { mutate: login, isPending } = useLoginMutation();

  const onSubmit = (data: LoginRequestSchemaType) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="bg-white-pure w-full rounded-2xl p-12 px-6 md:w-sm">
      <h2 className="text-center font-bold">商家會員登入</h2>
      <div className="flex flex-col gap-5">
        <FormProvider {...methods}>
          <DemoFillButton fields={demoData} /> {/* 必須放在 FormProvider 內 */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormRender<LoginFieldType> fields={loginFields} />
            <Button type="submit" disabled={isPending} className="mt-6 w-full md:flex">
              {isPending ? "登入中..." : "立即登入"}
            </Button>
          </form>
        </FormProvider>
        <RegisterHint signUpRoute="/brand/signUp" />
      </div>
    </div>
  );
};

LoginForm.displayName = "LoginForm";

export default LoginForm;
