import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToggleRoomPlanStatus } from "@/hooks/react-query/useRoomPlan";
import { RoomPlanType } from "@/schema/dashboard/roomPlan.dto";
import { useRoomDeleteDialogStore, useRoomDialogStore } from "@/store/Dialog/useRoomStore";

export const defaultRoomPlan: RoomPlanType = {
  id: undefined,
  hotel_id: "",
  hotel_room_id: "",
  price: 1,
  subscription_price: 1,
  images: [],
  start_date: "2025-06-01",
  end_date: "2025-09-01",
  is_active: true,
  created_at: "",
  updated_at: "",
  room_type_name: undefined,
  hotel_room_basePrice: undefined,
  hotel_room_name: undefined,
  hotel_room_imageUrl: undefined,
};

export const columns: ColumnDef<RoomPlanType>[] = [
  {
    accessorKey: "id",
    header: "產品ID",
  },
  {
    accessorKey: "is_active",
    header: "是否啟用",
    cell: ({ row }) => {
      const { id, is_active } = row.original;
      const { mutate, isPending } = useToggleRoomPlanStatus();

      return (
        <Switch
          className="cursor-pointer"
          checked={is_active}
          disabled={isPending}
          onCheckedChange={() => mutate(id ?? "")}
        />
      );
    },
  },
  {
    accessorKey: "start_date",
    header: "活動開始時間",
  },
  {
    accessorKey: "end_date",
    header: "活動結束時間",
  },
  {
    accessorKey: "price",
    header: "價格",
  },
  {
    accessorKey: "subscription_price",
    header: "訂閱價格",
  },
  {
    accessorKey: "created_at",
    header: "建立時間",
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      const { openDialog } = useRoomDialogStore.getState(); // 編輯
      const { openDialog: openDeleteDialog } = useRoomDeleteDialogStore.getState(); // 刪除
      const rowData = row.original;

      return (
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="bg-blue-400" onClick={() => openDialog(rowData)}>
            <Pencil className="size-4" />
          </Button>
          <Button size="sm" variant="destructive" onClick={() => openDeleteDialog(rowData)}>
            <Trash2 className="size-4" />
          </Button>
        </div>
      );
    },
  },
];
