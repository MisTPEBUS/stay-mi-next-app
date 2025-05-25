"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { FormRender } from "@/components/FormRender";
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

  return (
    <div className="bg-white-pure container w-full rounded-2xl p-12 px-6 md:w-lg">
      <h2 className="mb-6 text-center font-bold">商家會員註冊</h2>
      <div className="flex flex-col gap-5">
        <FormProvider {...methods}>
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
