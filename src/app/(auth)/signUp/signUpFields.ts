import { FormFieldConfig } from "@/components/FormRender/type";
import { RegisterUserReqSchemaType } from "@/schema/auth.dto";

export type SignUpFieldType = RegisterUserReqSchemaType;

export const signUpFields: FormFieldConfig<SignUpFieldType>[] = [
  {
    type: "email",
    label: "帳號",
    name: "email",
    placeholder: "請輸入註冊信箱",
    required: true,
  },
  {
    type: "password",
    label: "密碼",
    name: "password",
    placeholder: "請輸入密碼",
    required: true,
  },
  {
    type: "text",
    label: "姓名",
    name: "name",
    placeholder: "請輸入姓名",
    required: true,
  },
  {
    type: "text",
    label: "電話",
    name: "phone",
    placeholder: "請輸入姓名",
    required: true,
  },
  {
    type: "date",
    label: "生日",
    name: "birthday",
    placeholder: "請輸入姓名",
    required: true,
  },
];
