"use client";

import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCreateHotelRoom, useUpdateHotelRoom } from "@/hooks/react-query/useRoom";
import { useRoomTypeOptions } from "@/hooks/react-query/useRoomType";
import { HotelRoomTypeCreateType } from "@/schema/dashboard/hotelRoom.dto";
import { useRoomDialogStore } from "@/store/Dialog/useRoomStore";

import { dialogFields as staticDialogFields } from "./dialogFields";

export const HotelRoomEditorDialog = () => {
  const methods = useForm<HotelRoomTypeCreateType>();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const { open, defaultValue, closeDialog } = useRoomDialogStore();
  const isEdit = useMemo(() => !!defaultValue?.id, [defaultValue]);

  const createMutation = useCreateHotelRoom();
  const updateMutation = useUpdateHotelRoom();

  const { data: roomTypeOptions = [], isLoading: loadingRoomTypeOptions } = useRoomTypeOptions();

  const dialogFields = useMemo(() => {
    return staticDialogFields.map((field) =>
      field.name === "room_type_id"
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

  const onSubmit = async (data: HotelRoomTypeCreateType) => {
    try {
      data.basePrice = isNaN(Number(data.basePrice)) ? 1 : Number(data.basePrice);
      data.images = [];
      if (isEdit && defaultValue?.id) {
        await updateMutation.mutateAsync({ id: defaultValue.id, data });
        toast.success("房間更新成功");
      } else {
        await createMutation.mutateAsync(data);
        toast.success("房間新增成功");
      }
      closeDialog();
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("操作失敗");
    }
  };

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent className="bg-white-pure flex max-w-xl flex-col rounded-3xl p-0 md:h-10/12">
        <div className="border-b p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">{isEdit ? "編輯房間" : "新增房間"}</DialogTitle>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <FormProvider {...methods}>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <FormRender<HotelRoomTypeCreateType> fields={dialogFields} />
            </form>
          </FormProvider>
        </div>

        <div className="space-x-2 border-t p-6 text-end">
          <Button type="submit" form="my-form-id" disabled={isSubmitting} size="lg" className="rounded-md">
            {isEdit ? "更新" : "儲存"}
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            disabled={isSubmitting}
            className="rounded-md"
            onClick={closeDialog}
          >
            關閉
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
