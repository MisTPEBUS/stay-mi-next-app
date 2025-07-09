import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";

import { FormLabel } from "@/components/ui/form";
type ProductOption = {
  label: string;
  value: string;
  basePrice: number;
  imageUrl: string;
};
export const ProductSelector = ({ options }: { options: ProductOption[] }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="product_id"
      control={control}
      render={({ field }) => {
        const selected = options.find((opt) => opt.value === field.value);

        return (
          <div className="space-y-2">
            <FormLabel className={"text-black-main block text-base font-medium"}>選擇伴手禮</FormLabel>

            <select
              value={field.value}
              onChange={(e) => {
                const val = e.target.value;
                field.onChange(val);
                const matched = options.find((o) => o.value === val);
                if (matched) {
                  // setValue("price", matched.basePrice);
                  /*   setValue("product_imageUrl", matched.imageUrl ? [matched.imageUrl] : []); */
                }
              }}
              className="w-full rounded-lg border px-2 py-3 text-sm"
            >
              <option value="">請選擇</option>
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}（NT${opt.basePrice}）
                </option>
              ))}
            </select>

            {selected?.imageUrl && (
              <div className="mt-2">
                <Image
                  src={selected.imageUrl}
                  alt="預覽圖片"
                  width={180}
                  height={120}
                  className="rounded border object-cover"
                />
              </div>
            )}
          </div>
        );
      }}
    />
  );
};
