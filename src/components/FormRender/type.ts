import { FieldValues, Path } from "react-hook-form";
export type FieldType = "text" | "tel" | "password" | "radio" | "select" | "checkbox" | "textarea" | "email" | "date";

export type FormFieldOption = {
  label: string;
  value: string;
};

export type FormFieldConfig<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  type: FieldType;
  label?: string;
  placeholder?: string;
  options?: FormFieldOption[];
  text?: string;
  id?: string;
  key?: string;
  halfWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  labelClassName?: string;
};

export type FormRendererProps<T extends FieldValues> = {
  FormFields: FormFieldConfig<T>[];
};
