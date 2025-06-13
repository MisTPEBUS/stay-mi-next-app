"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductsType } from "@/schema/dashboard/product.dto";
import { useProductDeleteDialogStore, useProductDialogStore } from "@/store/Dialog/useProductStore";

export const defaultProduct: ProductsType = {
  id: "",
  hotel_id: "",
  name: "測試產品",
  features: "測試特色",
  description: "這是一個測試產品",
  imageUrl: "https://example.com/image.jpg",
  created_at: "2025-05-03 21:13:38",
  updated_at: "2025-05-03 21:13:38",
  price: 0,
};

export const columns: ColumnDef<ProductsType>[] = [
  {
    accessorKey: "imageUrl",
    header: "圖片",
    cell: ({ row }) => {
      const fallback = "/images/no_image_content.svg";
      const value = row.original.imageUrl;
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
    accessorKey: "name",
    header: "伴手禮名稱",
  },
  {
    accessorKey: "features",
    header: "產品種類",
    cell: ({ row }) => {
      return <Badge variant="default">{row.original.features}</Badge>;
    },
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
    accessorKey: "price",
    header: "單品售價",
  },
  {
    accessorKey: "created_at",
    header: "建立時間",
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      const { openDialog } = useProductDialogStore.getState();
      const { openDialog: openDeleteDialog } = useProductDeleteDialogStore.getState();
      const rowData = row.original;

      return (
        <div className="flex gap-2">
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
