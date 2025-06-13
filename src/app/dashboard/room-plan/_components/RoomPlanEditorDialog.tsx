"use client";

import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHotelRoomOptions } from "@/hooks/react-query/useRoom";
import { useCreateRoomPlan, useUpdateRoomPlan } from "@/hooks/react-query/useRoomPlan";
import { RoomPlanCreateType } from "@/schema/dashboard/roomPlan.dto";
import { useRoomPlanDialogStore } from "@/store/Dialog/useRoomPlanStore";

import { dialogFields as staticDialogFields } from "./dialogFields";

export const RoomPlanDialog = () => {
  const methods = useForm<RoomPlanCreateType>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const { open, defaultValue, closeDialog } = useRoomPlanDialogStore();
  const isEdit = useMemo(() => !!defaultValue?.id, [defaultValue]);

  const createMutation = useCreateRoomPlan();
  const updateMutation = useUpdateRoomPlan();

  const { data: roomTypeOptions = [], isLoading: loadingRoomTypeOptions } = useHotelRoomOptions();
  const dialogFields = useMemo(() => {
    return staticDialogFields.map((field) =>
      field.name === "hotel_room_id"
        ? {
            ...field,
            options: roomTypeOptions,
            loading: loadingRoomTypeOptions,
          }
        : field
    );
  }, [roomTypeOptions, loadingRoomTypeOptions]);

  useEffect(() => {
    if (open) {
      reset(defaultValue ?? {});
    }
  }, [open, defaultValue, reset]);
  const onSubmit = async (data: RoomPlanCreateType) => {
    data.price = isNaN(Number(data.price)) ? 1 : Number(data.price);
    data.subscription_price = isNaN(Number(data.subscription_price)) ? 1 : Number(data.subscription_price);
    try {
      if (isEdit && defaultValue?.id) {
        await updateMutation.mutateAsync({ id: defaultValue.id, data });
        toast.success("計畫更新成功");
      } else {
        console.log(data);
        await createMutation.mutateAsync(data);
        toast.success("計畫新增成功");
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
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <FormRender<RoomPlanCreateType> fields={dialogFields} />
            </form>
          </FormProvider>
        </div>
        <div className="space-x-2 border-t p-6 text-end">
          <Button type="submit" disabled={isSubmitting} className="rounded-md text-end" size={"lg"}>
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
