import { FormFieldConfig } from "@/components/FormRender/type";
import { ProductPlanCreateType } from "@/schema/dashboard/productPlan.dto";

export type FieldType = ProductPlanCreateType;

export const dialogFields: FormFieldConfig<FieldType>[] = [
  {
    type: "select",
    label: "選擇伴手禮",
    name: "product_id",
  },
  {
    name: "price",
    type: "number",
    label: "售價",
  },
  {
    name: "start_date",
    type: "text",
    label: "計畫開始時間",
    placeholder: "格式範例: 2023-10-01",
    halfWidth: false,
  },
  {
    name: "end_date",
    type: "text",
    placeholder: "格式範例: 2023-10-01",
    label: "計畫結束時間",
    halfWidth: false,
  },
];
