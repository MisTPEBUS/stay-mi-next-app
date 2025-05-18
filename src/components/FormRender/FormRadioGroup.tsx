import { RadioGroup } from "@radix-ui/react-dropdown-menu";
import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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
      render={({ field: controller }) => (
        <FormItem className={field.className}>
          {field.label && <FormLabel>{field.label}</FormLabel>}
          <FormControl>
            <RadioGroup onValueChange={controller.onChange} value={controller.value}>
              {options.map((option) => (
                <FormItem key={option.value} className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroup value={option.value} />
                  </FormControl>
                  <FormLabel>{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormRadioGroup;
