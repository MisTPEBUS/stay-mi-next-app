"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormRender } from "@/components/FormRender";
import DemoFillButton, { DemoFieldItem } from "@/components/common/DemoFillButton";
import { Button } from "@/components/ui/button";
import { useRegisterStoreMutation } from "@/hooks/react-query/useRegisterMutation";
import { RegisterStoreReqSchema, RegisterStoreReqSchemaType } from "@/schema/auth.dto";

import { signUpFields, SignUpFieldType } from "../signUpFields";

const SignUpForm = () => {
  const { mutate: storeSignUp, isPending } = useRegisterStoreMutation();

  const methods = useForm<RegisterStoreReqSchemaType>({
    resolver: zodResolver(RegisterStoreReqSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      title: "",
      description: "",
      phone: "",
      birthday: "1990-01-01",
      gender: "m",
    },
  });
  const StoreRegisterDemoData: DemoFieldItem[] = [
    { email: "ya-two@gmail.com" },
    { title: "雅兔大飯店" },
    { name: "鴨兔醬" },
    {
      description:
        "雅兔大飯店位於市中心，結合現代設計與舒適住宿體驗，提供完善設施如自助早餐、會議室與免費Wi-Fi。無論商務出差或休閒旅遊，皆能享受便捷交通與高品質服務，是旅客理想下榻之選。",
    },
    { phone: "0987654321" },
    { birthday: "1990-01-01" },
    { gender: "m" },
    { password: "11111111" },
  ];
  const { handleSubmit } = methods;

  const onSubmit = (data: RegisterStoreReqSchemaType) => {
    storeSignUp(data);
  };

  return (
    <div className="bg-white-pure container w-full rounded-2xl p-12 px-6 md:w-lg">
      <h2 className="mb-6 text-center font-bold">商家會員註冊</h2>
      <div className="flex flex-col gap-5">
        <FormProvider {...methods}>
          <DemoFillButton fields={StoreRegisterDemoData} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormRender<SignUpFieldType> fields={signUpFields} />
            <Button type="submit" disabled={isPending} className="mt-6 w-full md:flex">
              {isPending ? "註冊中..." : "註冊送出"}
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUpForm;
