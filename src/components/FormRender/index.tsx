import { FieldValues } from "react-hook-form";

import FormCheckbox from "./FormCheckbox";
import FormDatePicker from "./FormDatePicker";
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
              return <FormInput key={field.name} field={field} />;
            case "radio":
              return <FormRadioGroup key={field.name} field={field} />;
            case "select":
              return <FormSelect key={field.name} field={field} />;
            case "checkbox":
              return <FormCheckbox key={field.name} field={field} />;
            case "textarea":
              return <FormTextarea key={field.name} field={field} />;
            case "switch":
              return <FormSwitch key={field.name} field={field} />;
            case "date":
              return <FormDatePicker key={field.name} field={field} />;
            case "editor":
              return <FormTipTapEditor key={field.name} name={field.name} label={field.label || ""} />;
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
