import { FieldValues, Path } from "react-hook-form";

export type FieldType =
  | "text"
  | "tel"
  | "password"
  | "number"
  | "email"
  | "date"
  | "radio"
  | "select"
  | "checkbox"
  | "switch"
  | "editor"
  | "file"
  | "textarea";

export type FormFieldOption = {
  label: string;
  value: string;
};

export type FormFieldConfig<T extends FieldValues> = {
  name: Path<T>;
  type: FieldType;
  label?: string;
  placeholder?: string;
  options?: FormFieldOption[]; // radio/select/checkbox
  description?: string;
  id?: string;
  className?: string;
  labelClassName?: string;
  disabled?: boolean;
  required?: boolean;
  halfWidth?: boolean;
  colSpan?: number;
};

export type FormRenderProps<T extends FieldValues> = {
  fields: FormFieldConfig<T>[];
};
