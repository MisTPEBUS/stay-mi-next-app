import { format } from "date-fns";
import { zhTW } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

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
      name={field.name as Path<T>}
      render={({ field: controller }) => {
        const valueDate =
          controller.value && typeof controller.value === "string"
            ? new Date(controller.value + "T00:00:00")
            : undefined;

        return (
          <FormItem className={cn("w-full", field.className)}>
            {field.label && (
              <FormLabel className={cn("text-black-main block text-base font-medium", field.labelClassName)}>
                {field.label}
              </FormLabel>
            )}
            <Popover modal={false}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button variant="datePickerRange" className="w-full justify-start rounded-lg">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                    {valueDate ? format(valueDate, "yyyy-MM-dd", { locale: zhTW }) : field.placeholder || "選擇日期"}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="z-[60] w-auto p-0" forceMount>
                <Calendar
                  locale={zhTW}
                  mode="single"
                  selected={valueDate}
                  onSelect={(date) => {
                    if (!date) return;
                    const iso = date.toISOString().split("T")[0];
                    form.setValue(field.name as Path<T>, iso as T[Path<T>], {
                      shouldValidate: true,
                      shouldDirty: true,
                    });
                  }}
                  showOutsideDays={false}
                  fixedWeeks
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormDatePicker;
