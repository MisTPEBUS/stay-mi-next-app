import { Eye, EyeOff } from "lucide-react"; // shadcn 預設使用的 icon 套件
import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = field.type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : field.type || "text";

  return (
    <FormField
      control={form.control}
      name={field.name}
      render={({ field: controller }) => (
        <FormItem className={field.className}>
          {field.label && (
            <FormLabel className={cn("text-black-main block text-base font-medium", field.labelClassName)}>
              {field.label}
            </FormLabel>
          )}
          <FormControl>
            <div className="relative">
              <Input
                {...controller}
                placeholder={field.placeholder}
                type={inputType}
                className={cn("focus:border-primary active:ring-primary pr-10 active:ring", field.className)}
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              )}
            </div>
          </FormControl>
          {field.description && <FormDescription>{field.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
