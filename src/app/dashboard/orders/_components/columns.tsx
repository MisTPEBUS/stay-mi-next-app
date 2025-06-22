import { ColumnDef } from "@tanstack/react-table";

import { OrderRoomProductType } from "@/schema/dashboard/order.dto";

export const columns: ColumnDef<OrderRoomProductType>[] = [
  {
    accessorKey: "id",
    header: "訂單 ID",
  },
  {
    accessorKey: "status",
    header: "狀態",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      switch (value) {
        case "pending":
          return "待確認";
        case "confirmed":
          return "已確認";
        case "cancelled":
          return "已取消";
        default:
          return "-";
      }
    },
  },

  {
    accessorKey: "check_in_date",
    header: "入住日期",
    cell: ({ getValue }) => getValue() ?? "-",
  },
  {
    accessorKey: "check_out_date",
    header: "退房日期",
    cell: ({ getValue }) => getValue() ?? "-",
  },
  {
    accessorKey: "total_price",
    header: "總金額",
    cell: ({ getValue }) => {
      const value = getValue<number>();
      return value != null ? `$${value.toFixed(0)}` : "-";
    },
  },

  {
    accessorKey: "payment_name",
    header: "付款人姓名",
  },

  {
    accessorKey: "contact_name",
    header: "聯絡人姓名",
  },
  {
    accessorKey: "contact_phone",
    header: "聯絡人電話",
  },
  {
    accessorKey: "contact_email",
    header: "聯絡人信箱",
  },

  {
    accessorKey: "updated_at",
    header: "更新時間",
    cell: ({ getValue }) => {
      const value = getValue<string>();
      return value ? new Date(value).toLocaleString() : "-";
    },
  },
];
