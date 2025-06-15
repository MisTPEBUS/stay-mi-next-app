"use client";

import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import DemoFillButton, { DemoFieldItem } from "@/components/common/DemoFillButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useHotelRoomOptions } from "@/hooks/react-query/useRoom";
import { useCreateRoomPlan, useUpdateRoomPlan } from "@/hooks/react-query/useRoomPlan";
import { RoomPlanCreateType } from "@/schema/dashboard/roomPlan.dto";
import { useRoomPlanDialogStore } from "@/store/Dialog/useRoomPlanStore";

import { HotelRoomSelector } from "./HotelRoomSelector";
import { dialogFields as staticDialogFields } from "./dialogFields";

const HotelRoomDemoData: DemoFieldItem[] = [
  { price: 3000 },
  { subscription_price: 3000 },
  { is_active: true },
  {
    description: `<h2>房型特色</h2><ol class="list-decimal ml-3"><li><p>專屬芬多精香氛私人陽台</p></li><li><p>6尺特製雙浴缸，舒壓雙人大床</p></li><li><p>獨立強勁出風量空調立扇</p></li><li><p>豪華藍牙喇叭與氣氛燈泡</p></li><li><p>55 吋智慧電視 | Netflix 支援</p></li></ol><hr><h2>貼心服務</h2><ol class="list-decimal ml-3"><li><p>免費專屬停車位</p></li><li><p>房內設施配有 Dyson整髮神器</p></li><li><p>可提供加價專屬 SPA、泡湯設置</p></li></ol>`,
  },
  { id: "" },
  { hotel_id: "" },
  { start_date: "2025-06-01" },
  { end_date: "2025-09-01" },
  { room_type_id: "" },

  { images: [] },
];

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
  const dialogFields = useMemo(
    () => staticDialogFields.filter((f) => f.name !== "hotel_room_id"),
    [roomTypeOptions, loadingRoomTypeOptions]
  );
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
            <DemoFillButton fields={HotelRoomDemoData} />
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <HotelRoomSelector options={roomTypeOptions} />
              <FormRender<RoomPlanCreateType> fields={dialogFields} />
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
