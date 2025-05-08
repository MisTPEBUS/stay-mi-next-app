"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import FormRender from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "@/hooks/react-query/useLoginMutation";
import { LoginRequestSchema, LoginRequestSchemaType } from "@/schema/auth.dto";
import { useLoginStore } from "@/store/useLoginStore";

import { LoginFieldType, loginFields } from "../../login";
import FacebookButton from "../FaceBookButton";
import GoogleButton from "../GoogleButton";
import LineButton from "../LineButton";

const LoginForm = () => {
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

    login({ email: data.email, password: data.password }); // 由 useLoginMutation 負責 setUser / toast / redirect
  };

  return (
    <div className="bg-white-pure w-full max-w-sm rounded-2xl p-6 shadow-md">
      <h2 className="mb-6 text-center text-2xl font-bold">您目前尚未登入</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRender<LoginFieldType> FormFields={loginFields} />
          <Button
            type="button"
            variant="outline"
            className="my-2 w-full md:flex"
            onClick={() => {
              setValue("email", "lobinda@gmail.com");
              setValue("password", "11111111");
              setValue("rememberMe", true);
            }}
          >
            一鍵DEMO帳號密碼
          </Button>
          <Button type="submit" disabled={isPending} className="my-2 w-full md:flex">
            {isPending ? "登入中..." : "立即登入"}
          </Button>

          <p className="mt-4 text-center">
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

          <div className="flex flex-col gap-2">
            {/* Google 登入 */}
            <GoogleButton />
            <LineButton />
            <FacebookButton />
          </div>

          <div className="my-2 text-center">
            <a href="#" className="text-primary mx-1 hover:underline">
              [服務條款與隱私權政策]
            </a>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
