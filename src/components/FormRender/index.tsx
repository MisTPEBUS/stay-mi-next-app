"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { FormRendererProps } from "./type";

const FormRender = <T extends FieldValues>({ FormFields }: FormRendererProps<T>) => {
  const [showPasswordMap, setShowPasswordMap] = useState<Record<string, boolean>>({});
  const { control } = useFormContext<T>();

  const togglePassword = (name: string) => {
    setShowPasswordMap((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex flex-wrap gap-4">
      {FormFields.map((field) => {
        const isPassword = field.type === "password";
        const fieldKey = String(field.name);

        return (
          <div key={field.key || fieldKey} className={cn(field.halfWidth ? "w-full md:w-[48%]" : "w-full")}>
            <FormField
              name={field.name}
              control={control}
              render={({ field: rhfField }) => (
                <FormItem className={cn("", field.className)}>
                  {field.type !== "checkbox" && field.label && (
                    <FormLabel className={cn("text-black-sub block text-base font-medium", field.labelClassName)}>
                      {field.label}
                    </FormLabel>
                  )}

                  <FormControl>
                    {/*   checkbox */}
                    {field.type === "checkbox" ? (
                      <div className="flex items-center space-x-2">
                        <Checkbox id={field.id} checked={!!rhfField.value} onCheckedChange={rhfField.onChange} />
                        <Label htmlFor={field.id}>{field.label}</Label>
                      </div>
                    ) : field.type === "radio" && field.options ? (
                      <div className="space-y-1">
                        {field.options.map((opt) => (
                          <label key={opt.value} className="flex items-center space-x-2">
                            <input
                              type="radio"
                              value={opt.value}
                              checked={rhfField.value === opt.value}
                              onChange={() => rhfField.onChange(opt.value)}
                              name={String(field.name)}
                            />
                            <span>{opt.label}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <div className="relative w-full">
                        <Input
                          id={field.id}
                          className="focus:border-primary"
                          type={isPassword ? (showPasswordMap[fieldKey] ? "text" : "password") : field.type}
                          placeholder={field.placeholder}
                          {...rhfField}
                        />
                        {isPassword && (
                          <button
                            type="button"
                            onClick={() => togglePassword(fieldKey)}
                            className="hover:text-primary absolute top-1/2 right-4 -translate-y-1/2 text-gray-500"
                          >
                            {showPasswordMap[fieldKey] ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        )}
                      </div>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FormRender;
