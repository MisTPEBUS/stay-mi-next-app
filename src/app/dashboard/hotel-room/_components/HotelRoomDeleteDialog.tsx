"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteHotelRoom } from "@/hooks/react-query/useRoom";
import { useRoomDeleteDialogStore } from "@/store/Dialog/useRoomStore";

export const HotelRoomDeleteDialog = () => {
  const { open, defaultValue, closeDialog } = useRoomDeleteDialogStore();
  const deleteMutation = useDeleteHotelRoom();

  const handleDelete = async () => {
    if (!defaultValue?.id) return;

    try {
      await deleteMutation.mutateAsync(defaultValue.id);
      toast.success(`房間  ${defaultValue.room_type_name} 已刪除`);
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
          你確定要刪除房間「<strong>{defaultValue?.room_type_name}</strong>」嗎？刪除後將無法還原。
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
