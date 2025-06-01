"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { id } from "date-fns/locale";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import TipTapEditor from "@/components/TipTapEditor";
import { Button } from "@/components/ui/button";
import { useCreateHotelMutation, useHotelBase } from "@/hooks/react-query/useHotelBase";
import { CreateHotelFormSchema, CreateHotelFormSchemaType, HotelSchemaType } from "@/schema/dashboard/hotelBase.dto";
import { getGeocode } from "@/utils/geoCoding";

import { Uploader } from "../../_components/Uploader";

import { createHotelFields } from "./createHotelFields";

type HotelFormProps = { hotels: HotelSchemaType[] };
const HotelForm = ({ hotels }: HotelFormProps) => {
  const hotel =
    hotels.length > 0
      ? hotels[0]
      : {
          id: "",
          region: "",
          name: "",
          address: "",
          phone: "",
          transportation: "",
          hotel_policies: `供應自助式中西式早餐服務...`,
          hotel_facilities: ["WiFi"],
          image_url: "...",
        };

  const methods = useForm<CreateHotelFormSchemaType>({
    resolver: zodResolver(CreateHotelFormSchema),
    defaultValues: {
      ...hotel, // 假設這裡包含 image_url: string
      image_url: hotel.image_url ?? "", // ✅ 確保初始就有值（空字串會觸發驗證）
    },
  });

  useEffect(() => {
    if (hotels.length > 0) {
      methods.reset(hotels[0]);
    }
  }, [hotels, methods.reset]);

  const { mutate: createHotel } = useCreateHotelMutation();

  const onSubmit = async (data: CreateHotelFormSchemaType) => {
    try {
      const { lat, lng } = await getGeocode(data.address);
      console.log(data);
      await createHotel({
        id: hotel?.id ?? "",
        data: {
          ...data,
          latitude: String(lat),
          longitude: String(lng),
          is_active: true,
        },
      });

      toast.success("飯店建立成功");
    } catch (error) {
      toast.error("地址解析失敗，請確認輸入的地址是否正確");
    }
  };
  return (
    <div>
      <div className="bg-white-pure w-full px-6 py-8">
        {hotels.length === 0 && (
          <div className="text-muted-foreground col-span-2 py-6 text-center">尚無飯店資料，請先建立資料</div>
        )}

        <div>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit, (errors) => {
                toast.error("欄位驗證失敗，請檢查輸入");
              })}
              className="grid grid-cols-1 gap-4"
            >
              <div className="space-y-4">
                <Uploader name="image_url" />
              </div>

              <div className="space-y-4">
                <FormRender<CreateHotelFormSchemaType> fields={createHotelFields} />

                <Button type="submit" className="mt-6 w-full">
                  {(hotels?.length ?? 0) === 0 ? "立即新增" : "更新資料"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};
export default HotelForm;
