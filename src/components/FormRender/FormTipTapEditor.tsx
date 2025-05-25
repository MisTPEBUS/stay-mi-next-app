"use client";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface FormTipTapEditorProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export const FormTipTapEditor = <T extends FieldValues>({ name, label }: FormTipTapEditorProps<T>) => {
  const { control, setValue, watch } = useFormContext<T>();
  const value = watch(name);

  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setValue(name, html as PathValue<T, typeof name>, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [editor, value]);

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl></FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
