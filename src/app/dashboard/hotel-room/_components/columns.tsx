"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToggleHotelRoomStatus } from "@/hooks/react-query/useRoom";
import { HotelRoomType } from "@/schema/dashboard/hotelRoom.dto";
import { useRoomDeleteDialogStore, useRoomDialogStore } from "@/store/Dialog/useRoomStore";

export const defaultHotelRoom: HotelRoomType = {
  id: "",
  hotel_id: "",
  room_type_id: "",
  basePrice: 0,
  description: "這是一個測試房間",
  is_active: true,
  images: ["https://example.com/image.jpg"],
  created_at: "2025-05-03 21:13:38",
  updated_at: "2025-05-03 21:13:38",
};

export const columns: ColumnDef<HotelRoomType & {}>[] = [
  {
    accessorKey: "images",
    header: "圖片",
    cell: ({ row }) => {
      const fallback = "/images/no_image_content.svg";
      const value = row.original.images?.[0] || fallback;

      const isValidUrl = typeof value === "string" && /^https?:\/\/.+/.test(value);
      const src = isValidUrl ? value : fallback;

      return (
        <div className="relative h-16 w-16 overflow-hidden rounded border">
          <Image src={src} alt="產品圖片" fill className="object-cover" />
        </div>
      );
    },
  },
  {
    accessorKey: "is_active",
    header: "是否啟用",
    cell: ({ row }) => {
      const { id, is_active } = row.original;
      const { mutate, isPending } = useToggleHotelRoomStatus();

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
    accessorKey: "room_type_name",
    header: "房型名稱",
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
    accessorKey: "basePrice",
    header: "金額",
  },
  {
    accessorKey: "created_at",
    header: "建立時間",
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      const { openDialog } = useRoomDialogStore.getState();
      const { openDialog: openDeleteDialog } = useRoomDeleteDialogStore.getState();
      const rowData = row.original;

      return (
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="bg-blue-400" onClick={() => openDialog(rowData)}>
            <Pencil className="size-4" />
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() => {
              console.error(openDialog);
              openDeleteDialog(rowData);
            }}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      );
    },
  },
];
