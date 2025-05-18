import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Switch } from "../ui/switch";

import { FormFieldConfig } from "./type";

type FormSwitchProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};

const FormSwitch = <T extends FieldValues>({ field }: FormSwitchProps<T>) => {
  const form = useFormContext<T>();

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => (
        <FormItem className="flex items-center gap-4 space-y-0">
          <FormControl>
            <Switch checked={controller.value} onCheckedChange={controller.onChange} />
          </FormControl>
          <FormLabel>{field.label}</FormLabel>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormSwitch;
