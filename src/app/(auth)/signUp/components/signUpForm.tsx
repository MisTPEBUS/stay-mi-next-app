"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";

import { AuthApi } from "@/api/services/auth";
import { Button } from "@/components/ui/button";
import { useHandleUserLogin } from "@/hooks/userHandlerLogin";
import { RegisterUserReqSchema, RegisterUserReqSchemaType } from "@/schema/auth.dto";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { handleLogin } = useHandleUserLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserReqSchemaType>({
    resolver: zodResolver(RegisterUserReqSchema),
    defaultValues: {
      name: "路邊攤",
      email: "example@gmail.com",
      password: "11111111",
      phone: "0422525759",
      birthday: "2015-04-12",
      gender: "m",
      provider: "",
      provider_id: "",
      avatar: "",
    },
  });

  const onSubmit = async (data: RegisterUserReqSchemaType) => {
    console.log("註冊開始");
    try {
      setLoading(true);
      setErrorMsg("");
      const response = await AuthApi.signup(data);
      handleLogin(response);
      console.log("註冊成功", response);
      // 可選：導頁或顯示註冊成功
    } catch (error) {
      console.error("註冊失敗", error);
      setErrorMsg("註冊失敗，請再試一次");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white-pure w-full max-w-sm rounded-xl p-6">
      <h2 className="mb-6 text-center text-xl font-bold text-gray-900">註冊會員</h2>
      {errorMsg && <p className="text-destructive mb-4 text-center text-sm">{errorMsg}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(errors).length > 0 && (
          <div className="text-destructive mb-4 text-sm">
            zod驗證錯誤：
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </div>
        )}
        {/* 姓名 */}
        <FormField label="姓名" id="name" register={register} errors={errors} />

        {/* 信箱 */}
        <FormField label="信箱" id="email" type="email" register={register} errors={errors} />

        {/* 密碼 */}
        <FormField label="密碼" id="password" type="password" register={register} errors={errors} />

        {/* 電話 */}
        <FormField label="電話" id="phone" register={register} errors={errors} />

        {/* 生日 */}
        <FormField label="生日" id="birthday" type="date" register={register} errors={errors} />

        {/* 性別 */}
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">性別</label>
          <select
            {...register("gender")}
            className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:outline-none"
          >
            <option value="f">女性</option>
            <option value="m">男性</option>
          </select>
          {errors.gender && <p className="text-destructive mt-1 text-sm">{errors.gender.message}</p>}
        </div>

        {/* 其他：provider, provider_id, avatar */}
        <FormField label="Provider" id="provider" register={register} errors={errors} type="hidden" />
        <FormField label="Provider ID" id="provider_id" register={register} errors={errors} type="hidden" />
        <FormField label="大頭貼 URL" id="avatar" register={register} errors={errors} type="hidden" />

        <Button
          type="submit"
          className="bg-primary hover:bg-primary-300 w-full rounded-lg py-2.5 font-bold text-white transition-shadow hover:shadow-md"
          disabled={loading}
        >
          {loading ? <div className="loader"></div> : "立即註冊"}
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;

// 共用欄位元件
const FormField = ({
  label,
  id,
  type = "text",
  register,
  errors,
}: {
  label?: string;
  id: keyof RegisterUserReqSchemaType;
  type?: string;
  register: UseFormRegister<RegisterUserReqSchemaType>;
  errors: FieldErrors<RegisterUserReqSchemaType>;
}) => {
  const hasHidden = type === "hidden";

  return (
    <div className={hasHidden ? "" : "mb-4"}>
      {!hasHidden && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={hasHidden ? "" : `請輸入${label}`}
        {...register(id)}
        className={`focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:outline-none ${
          hasHidden ? "hidden" : ""
        }`}
      />
      {!hasHidden && errors[id] && <p className="text-destructive mt-1 text-sm">{errors[id]?.message}</p>}
    </div>
  );
};
