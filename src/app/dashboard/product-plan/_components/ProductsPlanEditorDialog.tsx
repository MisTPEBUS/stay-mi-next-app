"use client";

import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import DemoFillButton, { DemoFieldItem } from "@/components/common/DemoFillButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProductOptions } from "@/hooks/react-query/useProduct";
import { useCreateProductPlan, useUpdateProductPlan } from "@/hooks/react-query/useProductPlan";
import { ProductPlanCreateType } from "@/schema/dashboard/productPlan.dto";
import { useProductPlanDialogStore } from "@/store/Dialog/useProductPlanStore";

import { ProductSelector } from "./ProductSelector";
import { dialogFields as staticDialogFields } from "./dialogFields";
const ProductPlanDemoData: DemoFieldItem[] = [
  { price: 3000 },

  { is_active: true },

  { id: "" },
  { hotel_id: "" },
  { start_date: "2025-06-01" },
  { end_date: "2025-09-01" },

  { product_imageUrl: "" },
];

export const ProductsPlanDialog = () => {
  const methods = useForm<ProductPlanCreateType>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const { open, defaultValue, closeDialog } = useProductPlanDialogStore();
  const isEdit = useMemo(() => !!defaultValue?.id, [defaultValue]);

  const createMutation = useCreateProductPlan();
  const updateMutation = useUpdateProductPlan();

  const { data: ProductOptions = [], isLoading: loadingProductOptions } = useProductOptions();

  const dialogFields = useMemo(
    () => staticDialogFields.filter((f) => f.name !== "product_id"),
    [ProductOptions, loadingProductOptions]
  );
  useEffect(() => {
    if (open) {
      reset(defaultValue ?? {});
    }
  }, [open, defaultValue, reset]);
  const onSubmit = async (data: ProductPlanCreateType) => {
    data.price = isNaN(Number(data.price)) ? 1 : Number(data.price);
    try {
      if (isEdit && defaultValue?.id) {
        await updateMutation.mutateAsync({ id: defaultValue.id, data });
      } else {
        console.log(data);
        await createMutation.mutateAsync(data);
      }
      closeDialog();
    } catch (err) {
      console.error("計畫操作失敗", err);
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
            <DialogTitle className="text-2xl">{isEdit ? "編輯計畫" : "新增計畫"} </DialogTitle>
          </DialogHeader>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <FormProvider {...methods}>
            {/* <DemoFillButton fields={ProductPlanDemoData} /> */}
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <ProductSelector options={ProductOptions} />
              <FormRender<ProductPlanCreateType> fields={dialogFields} />
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
