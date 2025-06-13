import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToggleProductPlanStatus } from "@/hooks/react-query/useProductPlan";
import { ProductPlanType } from "@/schema/dashboard/productPlan.dto";
import { useProductPlanDeleteDialogStore, useProductPlanDialogStore } from "@/store/Dialog/useProductPlanStore";

export const defaultProductPlan: ProductPlanType = {
  id: "",
  hotel_id: "",
  product_id: "",
  product_name: "",
  product_imageUrl: "",
  price: 299,
  start_date: "2025-06-01",
  end_date: "2025-08-31",
  is_active: true,
  created_at: "2025-05-06 22:09:01",
  updated_at: "2025-05-06 22:09:01",
};

export const columns: ColumnDef<ProductPlanType>[] = [
  {
    accessorKey: "is_active",
    header: "是否啟用",
    cell: ({ row }) => {
      const { id, is_active } = row.original;
      const { mutate, isPending } = useToggleProductPlanStatus();

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
    accessorKey: "product_name",
    header: "產品名稱",
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
    accessorKey: "created_at",
    header: "建立時間",
  },
  {
    id: "actions",
    header: "操作",
    cell: ({ row }) => {
      const { openDialog } = useProductPlanDialogStore.getState(); // 編輯
      const { openDialog: openDeleteDialog } = useProductPlanDeleteDialogStore.getState(); // 刪除
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
