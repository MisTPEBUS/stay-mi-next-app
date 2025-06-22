import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";

import { FormLabel } from "@/components/ui/form";
export type RoomOption = {
  label: string;
  value: string;
  basePrice: number;
  imageUrl: string;
};
export const HotelRoomSelector = ({ options }: { options: RoomOption[] }) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name="hotel_room_id"
      control={control}
      render={({ field }) => {
        const selected = options.find((opt) => opt.value === field.value);

        return (
          <div className="space-y-2">
            <FormLabel className={"text-black-main block text-base font-medium"}>選擇房型</FormLabel>

            <select
              value={field.value}
              onChange={(e) => {
                const val = e.target.value;
                field.onChange(val);
                const matched = options.find((o) => o.value === val);
                if (matched) {
                  setValue("price", matched.basePrice);
                  setValue("subscription_price", matched.basePrice);
                  setValue("images", matched.imageUrl ? [matched.imageUrl] : []);
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
