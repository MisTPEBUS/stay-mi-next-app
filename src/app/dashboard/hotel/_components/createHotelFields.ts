import { FormFieldConfig } from "@/components/FormRender/type";
import { cityOptions, hotelFacilities } from "@/config/settings";
import { CreateHotelFormSchemaType } from "@/schema/dashboard/hotelBase.dto";

const hotelFacilityOptions = hotelFacilities.map((item) => ({
  label: item.value,
  value: item.value,
}));
export const createHotelFields: FormFieldConfig<CreateHotelFormSchemaType>[] = [
  {
    name: "region",
    type: "select",
    label: "地區",
    placeholder: "請輸入地區，例如 台北, 新北, 高雄市",
    options: cityOptions,
    halfWidth: true,
  },
  {
    name: "name",
    type: "text",
    label: "飯店名稱",
    placeholder: "請輸入飯店名稱",
    halfWidth: true,
  },
  {
    name: "address",
    type: "text",
    label: "地址",
    placeholder: "請輸入地址",
    halfWidth: false,
  },
  {
    name: "phone",
    type: "tel",
    label: "電話",
    placeholder: "例如 0912345678",
    halfWidth: true,
  },
  {
    name: "hotel_facilities",
    type: "checkboxGroup",
    label: "飯店設施",
    options: hotelFacilityOptions,
    halfWidth: false,
  },

  {
    name: "transportation",
    type: "editor",
    label: "交通資訊",
    halfWidth: false,
  },
  {
    name: "hotel_policies",
    type: "editor",
    label: "住宿須知",
    halfWidth: false,
  },
];
