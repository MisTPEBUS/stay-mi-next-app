import { FormFieldConfig } from "@/components/FormRender/type";
import { RegisterStoreReqSchemaType } from "@/schema/auth.dto";

export type SignUpFieldType = RegisterStoreReqSchemaType;

export const signUpFields: FormFieldConfig<SignUpFieldType>[] = [
  {
    type: "email",
    label: "註冊信箱",
    name: "email",
    placeholder: "請輸入註冊信箱",
    required: true,
    halfWidth: true,
  },
  {
    type: "password",
    label: "密碼",
    name: "password",
    placeholder: "請輸入密碼",
    required: true,
    halfWidth: true,
  },

  {
    type: "text",
    label: "商家名稱",
    name: "title",
    placeholder: "請輸入商店名稱",
    required: true,
  },
  {
    type: "textarea",
    label: "商店描述",
    name: "description",
    placeholder: "請輸入商店介紹",
    required: true,
  },
  {
    type: "text",
    label: "申請人姓名",
    name: "name",
    placeholder: "請輸入姓名",
    required: true,
  },
  {
    type: "tel",
    label: "申請人電話",
    name: "phone",
    placeholder: "請輸入電話",
    required: true,
  },
  {
    type: "date",
    label: "申請人生日",
    name: "birthday",
    placeholder: "請輸入姓名",
    required: true,
  },
];
