import { FieldValues, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

import { FormFieldConfig } from "./type";

type FormSelectProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};
export const FormSelect = <T extends FieldValues>({ field }: FormSelectProps<T>) => {
  const form = useFormContext<T>();
  const options = field.options || [];

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => (
        <FormItem className={field.className}>
          {field.label && (
            <FormLabel className={cn("text-black-sub block text-base font-medium", field.labelClassName)}>
              {field.label}
            </FormLabel>
          )}
          <Select onValueChange={controller.onChange} value={controller.value}>
            <FormControl>
              <SelectTrigger className="focus:border-primary w-full">
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value} className="w-full">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
