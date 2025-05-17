import { FormFieldConfig } from "@/components/FormRender/type";
import { UpdatePasswordSchemaType } from "@/schema/userProfile.dto";

export type ChangePasswordFieldType = UpdatePasswordSchemaType;

export const changePasswordFields: FormFieldConfig<ChangePasswordFieldType>[] = [
  {
    type: "text",
    label: "舊密碼",
    name: "oldPassword",
    placeholder: "請輸入目前使用中的密碼",
    required: true,
  },
  {
    type: "password",
    label: "新密碼",
    name: "newPassword",
    placeholder: "請輸入密碼",
    required: true,
  },
  {
    type: "password",
    label: "確認新密碼",
    name: "confirmPassword",
    placeholder: "請再次輸入新密碼以確認",

    required: true,
  },
];
