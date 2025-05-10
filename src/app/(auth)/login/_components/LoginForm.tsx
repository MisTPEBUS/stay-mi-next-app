"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { FormProvider, useForm } from "react-hook-form";

import FormRender from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/hooks/react-query/useLoginMutation";
import { LoginRequestSchema, LoginRequestSchemaType } from "@/schema/auth.dto";
import { useLoginStore } from "@/store/useLoginStore";

import { LoginFieldType, loginFields } from "../loginFields";

import GoogleButton from "./GoogleButton";
import LineButton from "./LineButton";
import FbButton from "./fbButton";

export type LoginFormHandle = {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setRememberMe: (rememberMe: boolean) => void;
};

const LoginForm = forwardRef<LoginFormHandle>((_, ref) => {
  const { rememberMe, email: rememberedEmail, setRememberMe, setEmail, clear } = useLoginStore();

  const methods = useForm<LoginRequestSchemaType & { rememberMe?: boolean }>({
    resolver: zodResolver(LoginRequestSchema),
    defaultValues: {
      email: rememberMe ? rememberedEmail : "",
      password: "",
      rememberMe: rememberMe,
    },
  });

  const { handleSubmit, setValue } = methods;

  useImperativeHandle(ref, () => ({
    setEmail: (email: string) => setValue("email", email),
    setPassword: (password: string) => setValue("password", password),
    setRememberMe: (rememberMe: boolean) => setValue("rememberMe", rememberMe),
  }));

  useEffect(() => {
    setValue("email", rememberMe ? rememberedEmail : "");
    setValue("rememberMe", rememberMe);
  }, [rememberMe, rememberedEmail, setValue]);

  const { mutate: login, isPending } = useLoginMutation();

  const onSubmit = (data: LoginRequestSchemaType & { rememberMe?: boolean }) => {
    console.error("onSubmit", data);
    if (data.rememberMe) {
      setRememberMe(true);
      setEmail(data.email);
    } else {
      clear();
    }

    login({ email: data.email, password: data.password });
  };

  return (
    <div className="bg-white-pure w-full rounded-2xl p-12 px-6 shadow-md md:w-sm">
      <h2 className="mb-6 text-center font-bold">會員登入</h2>
      <div className="flex flex-col gap-5">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormRender<LoginFieldType> FormFields={loginFields} />

            <Button type="submit" disabled={isPending} className="mt-6 w-full md:flex">
              {isPending ? "登入中..." : "立即登入"}
            </Button>
          </form>
        </FormProvider>
        <p className="text-center">
          還沒有成為會員？
          <a href="/signUp" className="text-primary ml-1 hover:underline">
            立即註冊
          </a>
        </p>
        <div className="my-2 flex items-center">
          <div className="border-gray flex-grow border-t" />
          <span className="text-black-sub mx-4">或使用其他方式登入</span>
          <div className="border-gray flex-grow border-t" />
        </div>
        <div className="flex flex-col gap-3">
          <GoogleButton />
          <LineButton />
          <FbButton />
        </div>
      </div>
    </div>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
