import { z } from "zod";

import { FormFieldConfig } from "./type";

export const exampleFields: FormFieldConfig<ExampleFormSchemaType>[] = [
  {
    name: "text",
    type: "text",
    label: "文字輸入",
    placeholder: "請輸入文字",
    halfWidth: true,
  },
  {
    name: "tel",
    type: "tel",
    label: "電話",
    placeholder: "例如 0912345678",
    halfWidth: true,
  },
  {
    name: "password",
    type: "password",
    label: "密碼",
    placeholder: "請輸入密碼",
    halfWidth: false,
  },
  {
    name: "number",
    type: "number",
    label: "數字欄位",
    placeholder: "請輸入數字",
    halfWidth: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "請輸入 Email",
    halfWidth: false,
  },
  {
    name: "date",
    type: "date",
    label: "日期選擇",
    halfWidth: true,
    className: "w-full",
  },
  {
    name: "radio",
    type: "radio",
    label: "性別選擇",
    options: [
      { label: "男性", value: "m" },
      { label: "女性", value: "f" },
    ],
    halfWidth: true,
  },
  {
    name: "select",
    type: "select",
    label: "國家選擇",
    options: [
      { label: "台灣", value: "tw" },
      { label: "日本", value: "jp" },
      { label: "美國", value: "us" },
    ],
    halfWidth: true,
  },
  {
    name: "checkbox",
    type: "checkbox",
    label: "興趣",
    options: [
      { label: "閱讀", value: "reading" },
      { label: "旅行", value: "travel" },
      { label: "美食", value: "food" },
    ],
    halfWidth: false,
  },
  {
    name: "switch",
    type: "switch",
    label: "是否訂閱電子報",
    halfWidth: true,
  },
  {
    name: "editor",
    type: "editor",
    label: "文章內容",
    halfWidth: false,
  },
  {
    name: "file",
    type: "file",
    label: "上傳檔案",
    halfWidth: true,
  },
  {
    name: "textarea",
    type: "textarea",
    label: "備註",
    placeholder: "請輸入備註內容",
    halfWidth: false,
  },
];

export const ExampleFormSchema = z.object({
  text: z.string().min(1, "文字輸入不得為空"),
  tel: z.string().regex(/^09\d{8}$/, "電話格式錯誤，需符合09xxxxxxxx"),
  password: z.string().min(6, "密碼至少需6個字元"),
  number: z.coerce.number().min(0, "數字不得小於0"),
  email: z.string().email("Email 格式不正確"),
  date: z.coerce.date(),
  radio: z.enum(["m", "f"]),
  select: z.enum(["tw", "jp", "us"]),
  checkbox: z.array(z.enum(["reading", "travel", "food"])).min(1, "至少需選擇一個興趣"),
  switch: z.boolean(),
  editor: z.string().min(1, "文章內容不得為空"),
  file: z.instanceof(FileList).refine((files) => files.length > 0, "請至少上傳一個檔案"),
  textarea: z.string().optional(),
});

export type ExampleFormSchemaType = z.infer<typeof ExampleFormSchema>;
