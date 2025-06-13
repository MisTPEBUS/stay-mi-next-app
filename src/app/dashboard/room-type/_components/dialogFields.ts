import { FormFieldConfig } from "@/components/FormRender/type";
import { roomServices } from "@/config/settings";
import { roomTypesCreateType } from "@/schema/dashboard/hotelRoomType.dto";

export type FieldType = roomTypesCreateType;
const roomServiceOptions = roomServices.map((item) => ({
  label: item.value,
  value: item.value,
}));
export const dialogFields: FormFieldConfig<FieldType>[] = [
  {
    type: "text",
    label: "房型名稱",
    name: "name",
    placeholder: "請輸入房型名稱",
  },
  {
    name: "room_service",
    type: "checkboxGroup",
    label: "飯店設施",
    options: roomServiceOptions,
    halfWidth: false,
  },
  {
    name: "description",
    type: "editor",
    label: "描述",
    halfWidth: false,
  },
];
