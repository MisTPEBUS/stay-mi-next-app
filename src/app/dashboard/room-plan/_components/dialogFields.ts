import { FormFieldConfig } from "@/components/FormRender/type";
import { RoomPlanCreateType } from "@/schema/dashboard/roomPlan.dto";

export type FieldType = RoomPlanCreateType;

export const dialogFields: FormFieldConfig<FieldType>[] = [
  {
    type: "select",
    label: "選擇房間",
    name: "hotel_room_id",
  },
  {
    name: "price",
    type: "number",
    label: "活動售價",
  },
  {
    name: "subscription_price",
    type: "number",
    label: "訂閱價格",
  },
  {
    name: "start_date",
    type: "date",
    label: "計畫開始時間",

    halfWidth: false,
  },
  {
    name: "end_date",
    type: "date",
    label: "計畫結束時間",
    halfWidth: false,
  },
  {
    name: "images",
    type: "text",
    label: "圖片",
    halfWidth: false,
  },

  {
    name: "is_active",
    type: "switch",
    label: "是否啟用",
    halfWidth: false,
  },
];
