import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

import TipTapEditor from "@/components/TipTapEditor";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface FormTipTapEditorProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export const FormTipTapEditor = <T extends FieldValues>({ name, label }: FormTipTapEditorProps<T>) => {
  const { control, setValue, watch } = useFormContext<T>();
  const value = watch(name) || "";

  const handleChange = (html: string) => {
    setValue(name, html as PathValue<T, typeof name>, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <TipTapEditor content={value} onChange={handleChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
