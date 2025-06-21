import { FormFieldConfig } from "@/components/FormRender/type";

import { OrderContactSchemaType } from "./schemas";

export const orderFields: FormFieldConfig<OrderContactSchemaType>[] = [
  { name: "customerLastName", label: "姓氏", type: "text", required: true, halfWidth: true },
  { name: "customerFirstName", label: "名字", type: "text", required: true, halfWidth: true },
  { name: "customerEmail", label: "電子郵件", type: "email", required: true },
  { name: "customerPhone", label: "電話", type: "tel" },
];

export const contactFields: FormFieldConfig<OrderContactSchemaType>[] = [
  { name: "contactLastName", label: "姓氏", type: "text", required: true, halfWidth: true },
  { name: "contactFirstName", label: "名字", type: "text", required: true, halfWidth: true },
  { name: "contactEmail", label: "電子郵件", type: "email", required: true },
  { name: "contactPhone", label: "電話", type: "tel" },
  { name: "notes", label: "備註", type: "textarea" },
];
