import { FormFieldConfig } from "@/components/FormRender/type";
import { ProductsCreateType } from "@/schema/dashboard/product.dto";

export type FieldType = ProductsCreateType;
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
    type: "text",
    label: "伴手禮名稱",
    name: "name",
    placeholder: "請輸入伴手禮名稱",
    halfWidth: false,
  },
  {
    name: "price",
    type: "number",
    label: "價格",
    halfWidth: true,
  },
  {
    name: "description",
    type: "editor",
    label: "飯店設施",

    halfWidth: false,
  },
  {
    name: "features",
    type: "radio",
    label: "產品種類",
    halfWidth: false,
    options: souvenirCategories,
  },

  {
    name: "imageUrl",
    type: "image",
    label: "圖片",
    halfWidth: false,
  },
];
