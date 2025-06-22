"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormRender } from "@/components/FormRender";
import DemoFillButton, { DemoFieldItem } from "@/components/common/DemoFillButton";
import { Button } from "@/components/ui/button";
import { allHotelFacilityValues } from "@/config/settings";
import { useCreateHotelMutation } from "@/hooks/react-query/useHotelBase";
import { CreateHotelFormSchema, CreateHotelFormSchemaType, HotelSchemaType } from "@/schema/dashboard/hotelBase.dto";
import { getGeocode } from "@/utils/geoCoding";

import { Uploader } from "../../_components/Uploader";

import { createHotelFields } from "./createHotelFields";

type HotelFormProps = { hotels: HotelSchemaType[] };

const HotelRoomDemoData: DemoFieldItem[] = [
  {
    description: `<h2>房型特色</h2><ol class="list-decimal ml-3"><li><p>專屬芬多精香氛私人陽台</p></li><li><p>6尺特製雙浴缸，舒壓雙人大床</p></li><li><p>獨立強勁出風量空調立扇</p></li><li><p>豪華藍牙喇叭與氣氛燈泡</p></li><li><p>55 吋智慧電視 | Netflix 支援</p></li></ol><hr><h2>貼心服務</h2><ol class="list-decimal ml-3"><li><p>免費專屬停車位</p></li><li><p>房內設施配有 Dyson整髮神器</p></li><li><p>可提供加價專屬 SPA、泡湯設置</p></li></ol>`,
  },
  { id: "" },
  { region: "" },
  { name: "" },
  { address: "" },
  { phone: "" },
  {
    transportation: "<h4>🚆 火車範例</h4><p>。</p><h4>🚗 自駕</h4><p>。</p><h4>🚌 公車</h4><p>。</p>",
  },
  {
    hotel_policies: `<h3>住宿規範[範例]</h3><ul class=\"list-disc ml-3\"><li><p>提供自助式中西式早餐服務，另設有早餐餐廳。（供應時段為：07:00–10:00）</p></li><li><p>本館禁止攜帶寵物入住。</p></li><li><p>若入住人數超過原房型之標準人數，需酌收加人費，請於訂房前先與飯店聯繫。</p></li><li><p>加人服務按設備另計，超過120cm兒童如需備品將酌收TWD800元，費用包含備品暨早餐。</p></li><li><p>除提供盥洗、寢具服務，提供另外布套式枕頭、嬰兒澡盆供房客預約服務。</p></li><li><p>免費提供保險櫃、熨斗、熨燙板、針線包，請洽訂房前台或服務櫃檯。</p></li><li><p>本館全面禁菸及禁止攜帶明火進入客房，違者將收取額外清潔費用。</p></li><li><p>為維護全館住宿品質，敬請避免於深夜時段喧嘩，以保障其他住客權益；請將房間空間限制於登記人員使用（以登記入住名冊為準，恕不接待無預約訪客）。</p></li><li><p>為防範疫情或安全之需，飯店將保留調整服務方式與權益之權利，敬請配合。</p></li><li><p>若您於入住後需要協助，敬請撥冗與櫃台聯絡。導覽及外約、外訪訂房亦需先與館聯聯絡，敬請住客共同維護住宿品質。</p></li><li><p>未滿18歲旅客，入住時請務必有成人同住或提供家長同意書，方可辦理入住。<br><br></p></li></ul><hr><h3>CHECK IN / OUT</h3><ul class=\"list-disc ml-3\"><li><p>進房時間（Check-in）：15:00後</p></li><li><p>退房時間（Check-out）：12:00前</p></li><li><p>逾延退房將另外收取相關費用，並以飯店回覆為準，謝謝您的配合。</p></li></ul>`,
  },
  { hotel_facilities: allHotelFacilityValues },
  {
    image_url:
      "https://res.cloudinary.com/dwq2ehew4/image/upload/v1748775258/stay-mi/image/a354e85b-1693-443b-bee2-37d4c62b1308/40f7b4272c4977c2beb538b7428aa75c.jpg",
  },
];
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
          transportation: "<h4>🚆 火車範例</h4><p>。</p><h4>🚗 自駕</h4><p>。</p><h4>🚌 公車</h4><p>。</p>",
          hotel_policies: `<h3>住宿規範[範例]</h3><ul class=\"list-disc ml-3\"><li><p>提供自助式中西式早餐服務，另設有早餐餐廳。（供應時段為：07:00–10:00）</p></li><li><p>本館禁止攜帶寵物入住。</p></li><li><p>若入住人數超過原房型之標準人數，需酌收加人費，請於訂房前先與飯店聯繫。</p></li><li><p>加人服務按設備另計，超過120cm兒童如需備品將酌收TWD800元，費用包含備品暨早餐。</p></li><li><p>除提供盥洗、寢具服務，提供另外布套式枕頭、嬰兒澡盆供房客預約服務。</p></li><li><p>免費提供保險櫃、熨斗、熨燙板、針線包，請洽訂房前台或服務櫃檯。</p></li><li><p>本館全面禁菸及禁止攜帶明火進入客房，違者將收取額外清潔費用。</p></li><li><p>為維護全館住宿品質，敬請避免於深夜時段喧嘩，以保障其他住客權益；請將房間空間限制於登記人員使用（以登記入住名冊為準，恕不接待無預約訪客）。</p></li><li><p>為防範疫情或安全之需，飯店將保留調整服務方式與權益之權利，敬請配合。</p></li><li><p>若您於入住後需要協助，敬請撥冗與櫃台聯絡。導覽及外約、外訪訂房亦需先與館聯聯絡，敬請住客共同維護住宿品質。</p></li><li><p>未滿18歲旅客，入住時請務必有成人同住或提供家長同意書，方可辦理入住。<br><br></p></li></ul><hr><h3>CHECK IN / OUT</h3><ul class=\"list-disc ml-3\"><li><p>進房時間（Check-in）：15:00後</p></li><li><p>退房時間（Check-out）：12:00前</p></li><li><p>逾延退房將另外收取相關費用，並以飯店回覆為準，謝謝您的配合。</p></li></ul>`,
          hotel_facilities: allHotelFacilityValues,
          image_url: "",
        };

  const methods = useForm<CreateHotelFormSchemaType>({
    resolver: zodResolver(CreateHotelFormSchema),
    defaultValues: {
      ...hotel,
      image_url: hotel.image_url ?? "", //
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
    } catch (error) {
      console.error("Error creating hotel:", error);
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
                console.error("Form validation errors:", errors);
                toast.error("欄位驗證失敗，請檢查輸入");
              })}
              className="grid grid-cols-1 gap-4"
            >
              <div className="space-y-4">
                <Uploader name="image_url" />
              </div>

              <div className="space-y-4">
                {/*  <DemoFillButton fields={HotelRoomDemoData}></DemoFillButton> */}
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
