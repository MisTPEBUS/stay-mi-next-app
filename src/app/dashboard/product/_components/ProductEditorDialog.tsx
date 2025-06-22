"use client";

import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import DemoFillButton, { DemoFieldItem } from "@/components/common/DemoFillButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCreateProduct, useUpdateProduct } from "@/hooks/react-query/useProduct";
import { ProductsCreateType } from "@/schema/dashboard/product.dto";
import { useProductDialogStore } from "@/store/Dialog/useProductStore";

import { dialogFields } from "./dialogFields";

const ProductDemoData: DemoFieldItem[] = [
  { price: 999 },
  { is_active: true },
  {
    description: `酥鬆外皮包裹著香甜鳳梨內餡，台灣最具代表性的伴手禮之一。`,
  },
  { features: "特色小吃" },
  { id: "" },
  { hotel_id: "" },
  { name: "測試產品" },

  { imageUrl: "" },
];

export const ProductDialog = () => {
  const methods = useForm<ProductsCreateType>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const { open, defaultValue, closeDialog } = useProductDialogStore();
  const isEdit = useMemo(() => !!defaultValue?.id, [defaultValue]);

  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();

  useEffect(() => {
    if (open) {
      reset(defaultValue ?? {});
    }
  }, [open, defaultValue, reset]);
  const onSubmit = async (data: ProductsCreateType) => {
    try {
      // 處理 imageUrl：轉為單一 string
      const imageUrlArray = Array.isArray(data.imageUrl) ? data.imageUrl : [data.imageUrl];
      const imageUrl = imageUrlArray.filter((url) => typeof url === "string" && url.trim())[0] ?? "";

      const payload = {
        ...data,
        price: Number(data.price),
        imageUrl,
      };

      if (isEdit && defaultValue?.id) {
        await updateMutation.mutateAsync({ id: defaultValue.id, data: payload });
        toast.success("伴手禮更新成功");
      } else {
        await createMutation.mutateAsync(payload);
        toast.success("伴手禮新增成功");
      }

      closeDialog();
    } catch (err) {
      console.error(err);
      toast.error("操作失敗");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        closeDialog(); // 關閉 Dialog 並清除 defaultValue（Zustand）
      }}
    >
      <DialogContent className="bg-white-pure flex max-w-xl flex-col rounded-3xl p-0 md:h-10/12">
        <div className="border-b p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">{isEdit ? "編輯伴手禮" : "新增伴手禮"} </DialogTitle>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <FormProvider {...methods}>
            {/* <DemoFillButton fields={ProductDemoData} /> */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <FormRender<ProductsCreateType> fields={dialogFields} />
            </form>
          </FormProvider>
        </div>

        <div className="space-x-2 border-t p-6 text-end">
          <Button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            disabled={isSubmitting}
            className="rounded-md text-end"
            size={"lg"}
          >
            {isEdit ? "更新" : "儲存"}
          </Button>
          <Button
            type="button"
            size={"lg"}
            variant={"outline"}
            disabled={isSubmitting}
            className="rounded-md text-end"
            onClick={() => {
              closeDialog(); // 關閉 Dialog 並清除 defaultValue（Zustand）
            }}
          >
            關閉
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
