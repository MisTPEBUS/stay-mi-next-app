import { FormFieldConfig } from "@/components/FormRender/type";
import { HotelRoomTypeCreateType } from "@/schema/dashboard/hotelRoom.dto";

export type FieldType = HotelRoomTypeCreateType;
type SouvenirCategory = {
  label: string;
  value: string;
};
export const souvenirCategories: SouvenirCategory[] = [
  { label: "特色小吃", value: "特色小吃" },
  { label: "紀念品", value: "紀念品" },
  { label: "保健食品", value: "保健食品" },
  { label: "手工藝品", value: "手工藝品" },
  { label: "飲品/茶葉", value: "飲品/茶葉" },
  { label: "生活用品", value: "生活用品" },
];
export const dialogFields: FormFieldConfig<FieldType>[] = [
  {
    type: "select",
    label: "選擇房型",
    name: "room_type_id",
  },

  {
    name: "description",
    type: "editor",
    label: "房間描述",

    halfWidth: false,
  },
  {
    name: "basePrice",
    type: "number",
    label: "金額",
    halfWidth: false,
  },
  {
    name: "images",
    type: "image",
    label: "圖片",
    halfWidth: false,
  },
];
