"use client";

import { useFormContext, FieldValues } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

import { FormFieldConfig } from "./type";

type FormRadioGroupProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};

const FormRadioGroup = <T extends FieldValues>({ field }: FormRadioGroupProps<T>) => {
  const form = useFormContext<T>();
  const options = field.options || [];

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => {
        const selectedValue = controller.value;

        const handleChange = (value: string) => {
          controller.onChange(value);
        };

        return (
          <FormItem className={field.className}>
            {field.label && (
              <FormLabel className={cn("text-black-main block text-base font-medium", field.labelClassName)}>
                {field.label}
              </FormLabel>
            )}
            <div className="flex flex-wrap gap-3">
              {options.map((option) => {
                const isChecked = selectedValue === option.value;
                return (
                  <label
                    key={option.value}
                    htmlFor={`${field.name}-${option.value}`}
                    className={cn(
                      "flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm",
                      isChecked
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <Checkbox
                      id={`${field.name}-${option.value}`}
                      checked={isChecked}
                      onCheckedChange={() => handleChange(option.value)}
                      className="sr-only"
                    />
                    <span>{option.label}</span>
                  </label>
                );
              })}
            </div>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormRadioGroup;
