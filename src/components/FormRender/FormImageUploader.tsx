import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

import { ImageUploader } from "@/app/dashboard/image-manager/_components/ImageUploader";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface FormImageUploaderProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export const FormImageUploader = <T extends FieldValues>({ name, label }: FormImageUploaderProps<T>) => {
  const { control, setValue, watch } = useFormContext<T>();
  const value = watch(name) ?? [];

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel className="text-black-main block text-base font-medium">{label}</FormLabel>
          <FormControl>
            <ImageUploader value={value} onChange={(val) => setValue(name, val as PathValue<T, typeof name>)} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
