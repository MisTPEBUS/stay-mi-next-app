import { FormFieldConfig } from "@/components/FormRender/type";
import { LoginRequestSchemaType } from "@/schema/auth.dto";

export type LoginFieldType = LoginRequestSchemaType & { rememberMe: boolean };

export const loginFields: FormFieldConfig<LoginFieldType>[] = [
  {
    type: "email",
    label: "帳號",
    name: "email",
    placeholder: "請輸入信箱",
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
    name: "rememberMe",
    type: "checkbox",
    label: "記住我",
    id: "remember-me",
  },
];
