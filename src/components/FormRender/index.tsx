import { FieldValues } from "react-hook-form";

import FormCheckbox from "./FormCheckbox";
import FormCheckboxGroup from "./FormCheckboxGroup";
import FormDatePicker from "./FormDatePicker";
import { FormImageUploader } from "./FormImageUploader";
import FormInput from "./FormInput";
import FormRadioGroup from "./FormRadioGroup";
import { FormSelect } from "./FormSelect";
import FormSwitch from "./FormSwitch";
import FormTextarea from "./FormTextarea";
import { FormTipTapEditor } from "./FormTipTapEditor";
import { FormRenderProps } from "./type";

export const FormRender = <T extends FieldValues>({ fields }: FormRenderProps<T>) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {fields.map((field) => {
        const colSpan = field.halfWidth ? "col-span-1" : "col-span-2";
        const renderField = () => {
          switch (field.type) {
            case "text":
            case "tel":
            case "email":
            case "password":
            case "number":
              return <FormInput field={field} />;
            case "radio":
              return <FormRadioGroup field={field} />;
            case "select":
              return <FormSelect field={field} />;
            case "checkbox":
              return <FormCheckbox field={field} />;
            case "checkboxGroup":
              return <FormCheckboxGroup field={field} />;
            case "textarea":
              return <FormTextarea field={field} />;
            case "switch":
              return <FormSwitch field={field} />;
            case "date":
              return <FormDatePicker field={field} />;
            case "editor":
              return <FormTipTapEditor name={field.name} label={field.label || ""} />;
            case "image":
              return <FormImageUploader name={field.name} label={field.label || ""} />;
            default:
              return null;
          }
        };

        return (
          <div key={field.name} className={colSpan}>
            {renderField()}
          </div>
        );
      })}
    </div>
  );
};
