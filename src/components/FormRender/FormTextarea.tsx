import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "../ui/textarea";

import { FormFieldConfig } from "./type";

type FormTextareaProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};

const FormTextarea = <T extends FieldValues>({ field }: FormTextareaProps<T>) => {
  const form = useFormContext<T>();

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => (
        <FormItem className={field.className}>
          {field.label && <FormLabel>{field.label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={field.placeholder} {...controller} />
          </FormControl>
          {field.description && <FormDescription>{field.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormTextarea;
