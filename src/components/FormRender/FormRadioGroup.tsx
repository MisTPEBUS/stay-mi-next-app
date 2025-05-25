import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

import { Label } from "../ui/label";

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
          {field.label && (
            <FormLabel className={cn("text-black-sub block text-base font-medium", field.labelClassName)}>
              {field.label}
            </FormLabel>
          )}
          <FormControl>
            <RadioGroup onValueChange={controller.onChange} value={controller.value} className="flex">
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label className="text-black-sub block text-base font-medium" htmlFor={option.value}>
                    {option.label}
                  </Label>
                </div>
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
