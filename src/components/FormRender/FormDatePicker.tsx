import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { FieldValues, useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

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
        <FormItem className={cn("w-full", field.className)}>
          {field.label && (
            <FormLabel className={cn("text-black-sub block text-base font-medium", field.labelClassName)}>
              {field.label}
            </FormLabel>
          )}
          <Popover>
            <PopoverTrigger asChild className="text-start">
              <FormControl>
                <Button variant={"datePickerRange"} className="rounded-lg">
                  <CalendarIcon className="ml-2 h-6 w-6 opacity-50" />
                  {controller.value
                    ? format(controller.value, "yyyy-MM-dd", { locale: zhTW })
                    : field.placeholder || "選擇日期"}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                locale={zhTW}
                mode="single"
                selected={controller.value}
                onSelect={controller.onChange}
                initialFocus
                showOutsideDays={false}
                fixedWeeks={true}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormDatePicker;
