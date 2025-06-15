import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRoomTypeDeleteDialogStore, useRoomTypeDialogStore } from "@/store/Dialog/useRoomTypeDialogStore";

export const defaultRoomType: RoomType = {
  id: "",
  name: "",
  description: "",
  room_service: [],
  created_at: "",
};

export type RoomType = {
  id: string;
  name: string;
  description: string;
  room_service: string[];
  created_at: string;
};

export const columns: ColumnDef<RoomType>[] = [
  {
    accessorKey: "name",
    header: "名稱",
  },
  {
    accessorKey: "description",
    header: "描述",
    cell: ({ row }) => {
      const htmlString = row.original.description;
      const plainText = htmlString.replace(/<[^>]+>/g, "");
      return <span>{plainText}</span>;
    },
  },
  {
    accessorKey: "room_service",
    header: "服務",
    cell: ({ row }) => row.original.room_service.join(", "),
  },
  {
    accessorKey: "created_at",
    header: "建立時間",
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      const { openDialog } = useRoomTypeDialogStore.getState(); // 編輯
      const { openDialog: openDeleteDialog } = useRoomTypeDeleteDialogStore.getState(); // 刪除
      const rowData = row.original;

      return (
        <div className="flex items-center justify-end gap-2">
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
