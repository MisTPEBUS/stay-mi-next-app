"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteHotelRoomType } from "@/hooks/react-query/useRoomType";
import { useRoomTypeDeleteDialogStore } from "@/store/Dialog/useRoomTypeDialogStore";

export const RoomTypeDeleteDialog = () => {
  const { open, defaultValue, closeDialog } = useRoomTypeDeleteDialogStore();
  const deleteMutation = useDeleteHotelRoomType();

  const handleDelete = async () => {
    if (!defaultValue?.id) return;

    try {
      await deleteMutation.mutateAsync(defaultValue.id);
      toast.success(`房型 ${defaultValue.name} 已刪除`);
      closeDialog();
    } catch {
      toast.error("刪除失敗，請稍後再試");
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) closeDialog();
      }}
    >
      <DialogContent className="bg-white-pure max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl">確認刪除</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          你確定要刪除房型「<strong>{defaultValue?.name}</strong>」嗎？刪除後將無法還原。
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={closeDialog}>
            取消
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={deleteMutation.isPending}>
            確認刪除
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
