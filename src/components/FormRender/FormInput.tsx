import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { FormFieldConfig } from "./type";

type FormInputProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};

const FormInput = <T extends FieldValues>({ field }: FormInputProps<T>) => {
  const form = useFormContext<T>();

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
          <FormControl>
            <Input
              placeholder={field.placeholder}
              {...controller}
              className="focus:border-primary active:ring-primary pr-10 active:ring"
            />
          </FormControl>
          {field.description && <FormDescription>{field.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormInput;
