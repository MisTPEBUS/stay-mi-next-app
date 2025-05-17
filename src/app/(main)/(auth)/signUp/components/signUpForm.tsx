"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import FormRender from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { useRegisterMutation } from "@/hooks/react-query/useRegisterMutation";
import { RegisterUserReqSchema, RegisterUserReqSchemaType } from "@/schema/auth.dto";

import { signUpFields, SignUpFieldType } from "../signUpFields";

const SignUpForm = () => {
  const { mutate: register, isPending } = useRegisterMutation();

  const methods = useForm<RegisterUserReqSchemaType>({
    resolver: zodResolver(RegisterUserReqSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "1990-01-01",
      gender: "m",
      provider: "",
      provider_id: "",
      avatar: "",
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: RegisterUserReqSchemaType) => {
    register(data);
  };

  /*  name: "路邊攤",
      email: "example@gmail.com",
      password: "11111111",
      phone: "0422525759",
      birthday: "2015-04-12",
      gender: "m",
      provider: "",
      provider_id: "",
      avatar: "", */

  return (
    <div className="bg-white-pure w-full rounded-2xl p-12 px-6 shadow-md md:w-sm">
      <h2 className="mb-6 text-center font-bold">會員登入</h2>
      <div className="flex flex-col gap-5">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormRender<SignUpFieldType> FormFields={signUpFields} />
            <Button type="submit" disabled={isPending} className="mt-6 w-full md:flex">
              {isPending ? "登入中..." : "立即送出"}
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUpForm;
