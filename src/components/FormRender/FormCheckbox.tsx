"use client";

import { useFormContext, FieldValues } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

import { FormFieldConfig } from "./type";

type FormCheckboxProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};

const FormCheckbox = <T extends FieldValues>({ field }: FormCheckboxProps<T>) => {
  const form = useFormContext<T>();

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => (
        <FormItem className="flex items-center gap-2">
          <FormControl>
            <Checkbox checked={controller.value} onCheckedChange={controller.onChange} />
          </FormControl>
          <FormLabel className="font-normal">{field.label}</FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormCheckbox;
