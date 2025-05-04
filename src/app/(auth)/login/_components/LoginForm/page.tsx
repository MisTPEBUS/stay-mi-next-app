"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { AuthApi } from "@/api/services/auth";
import { Button } from "@/components/ui/button";
import { useHandleUserLogin } from "@/hooks/userHandlerLogin";
import { LoginRequestSchema, LoginRequestSchemaType } from "@/schema/auth.dto";

import GoogleButton from "../GoogleButton";
import LineButton from "../LineButton";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { handleLogin } = useHandleUserLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequestSchemaType>({
    resolver: zodResolver(LoginRequestSchema),
    defaultValues: {
      email: "lobinda@gmail.com",
      password: "11111111",
    },
  });

  const onSubmit = async (data: LoginRequestSchemaType) => {
    try {
      setLoading(true);
      setErrorMsg("");

      console.log("登入開始");
      const response = await AuthApi.login(data);
      handleLogin(response);

      console.log("登入成功", response);
    } catch (error) {
      console.error("登入失敗", error);
      setErrorMsg("登入失敗，請再試一次");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-center text-xl font-bold text-[#222222]">您目前尚未登入</h2>
      {errorMsg && <p className="text-primary mb-4 text-center text-sm">{errorMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 帳號 */}
        <div className="mb-4">
          <label htmlFor="account" className="mb-1 block text-sm font-medium text-[#4A4A4A]">
            帳號
          </label>
          <input
            type="text"
            id="account"
            placeholder="請輸入信箱"
            {...register("email")}
            className="w-full rounded-lg border border-[#D9D9D9] px-4 py-2 text-[#222222] placeholder-[#999999] focus:border-[#F8451A] focus:ring-2 focus:ring-[#F8451A] focus:outline-none"
          />
          {errors.email && <p className="text-primary mt-1 text-sm">{errors.email.message}</p>}
        </div>

        {/* 密碼 */}
        <div className="mb-4">
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-[#4A4A4A]">
            密碼
          </label>
          <input
            type="password"
            id="password"
            placeholder="請輸入密碼"
            {...register("password")}
            className="w-full rounded-lg border border-[#D9D9D9] px-4 py-2 text-[#222222] placeholder-[#999999] focus:border-[#F8451A] focus:ring-2 focus:ring-[#F8451A] focus:outline-none"
          />
          {errors.password && <p className="text-primary mt-1 text-sm">{errors.password.message}</p>}
        </div>

        {/* 記住密碼 & 忘記密碼 */}
        <div className="mb-4 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[#4A4A4A]">
            <input type="checkbox" className="rounded accent-[#F8451A]" defaultChecked />
            記住密碼
          </label>
          <a href="#" className="text-[#F8451A] hover:underline">
            忘記密碼？
          </a>
        </div>

        {/* 同意條款 */}
        <div className="mb-6 text-sm">
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1 rounded accent-[#F8451A]" defaultChecked />
            <span className="leading-snug text-[#4A4A4A]">
              我已閱讀並同意
              <a href="#" className="mx-1 text-[#F8451A] hover:underline">
                服務條款與隱私權政策
              </a>
            </span>
          </label>
        </div>

        {/* 登入按鈕 */}
        <Button
          type="submit"
          className="w-full rounded-lg bg-[#F8451A] py-2.5 font-bold text-white transition-shadow hover:bg-[#D33C3C] hover:shadow-md"
          disabled={loading}
        >
          {loading ? <div className="loader"></div> : "立即登入"}
        </Button>

        {/* 註冊連結 */}
        <p className="mt-4 text-center text-sm text-[#4A4A4A]">
          還沒有成為會員？
          <a href="/signUp" className="ml-1 text-[#F8451A] hover:underline">
            立即註冊
          </a>
        </p>

        {/* 分隔線 */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-[#D9D9D9]" />
          <span className="mx-4 text-sm text-[#999999]">或使用其他方式登入</span>
          <div className="flex-grow border-t border-[#D9D9D9]" />
        </div>

        <div className="flex flex-col gap-2">
          {/* Google 登入 */}
          <GoogleButton />
          <LineButton />
          <div className="flex justify-center">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#D9D9D9] bg-[#F8F9FA] py-2.5 text-[#4A4A4A] transition hover:bg-[#E0E0E0]"
            >
              使用 Facebook 登入
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
