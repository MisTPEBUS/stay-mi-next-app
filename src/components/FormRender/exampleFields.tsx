import { FormFieldConfig } from "./type";

export type ExampleFormType = {
  text: string;
  tel: string;
  password: string;
  number: number;
  email: string;
  date: Date;
  radio: string;
  select: string;
  checkbox: string[];
  switch: boolean;
  editor: string;
  file: FileList;
  textarea: string;
};

export const exampleFields: FormFieldConfig<ExampleFormType>[] = [
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
      { label: "男性", value: "male" },
      { label: "女性", value: "female" },
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
