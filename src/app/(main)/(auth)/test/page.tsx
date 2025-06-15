"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormRender } from "@/components/FormRender";
import { exampleFields, ExampleFormSchema, ExampleFormSchemaType } from "@/components/FormRender/exampleFields";
import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";

const TestPage = () => {
  const [post, setPost] = useState("");
  const methods = useForm<ExampleFormSchemaType>({
    resolver: zodResolver(ExampleFormSchema),
    defaultValues: {},
  });
  const onChange = (content: string) => {
    setPost(content);
    console.log(content);
  };
  const onSubmit = (data: ExampleFormSchemaType) => {
    console.log("Submitted:", data);
  };
  return (
    <div className="bg-white-pure mx-auto max-w-3xl px-6 py-8">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormRender<ExampleFormSchemaType> fields={exampleFields} />
          <Button type="submit" className="mt-6 w-full md:flex">
            立即登入
          </Button>
        </form>
      </FormProvider>

      <TipTapEditor content={post} onChange={onChange} />
    </div>
  );
};

export default TestPage;
