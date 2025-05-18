import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import { FormFieldConfig } from "./type";

type FormDatePickerProps<T extends FieldValues> = {
  field: FormFieldConfig<T>;
};

const FormDatePicker = <T extends FieldValues>({ field }: FormDatePickerProps<T>) => {
  const form = useFormContext<T>();

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => (
        <FormItem className={field.className}>
          {field.label && <FormLabel>{field.label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant={"outline"} className={!controller.value ? "text-muted-foreground" : ""}>
                  {controller.value ? format(controller.value, "yyyy-MM-dd") : field.placeholder || "選擇日期"}
                  <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={controller.value} onSelect={controller.onChange} initialFocus />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormDatePicker;
