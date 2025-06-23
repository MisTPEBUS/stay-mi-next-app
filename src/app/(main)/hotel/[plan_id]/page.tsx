import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { UserRoomProductPlanApi } from "@/api/services/user/plan/roomProductPlan";
import ClientBookingPage from "@/app/(main)/hotel/[plan_id]/clientBookingPage";

type Props = {
  params: Promise<{ plan_id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { plan_id } = await params;

  const roomPlan = await UserRoomProductPlanApi.getHotelRoomProduct(plan_id);

  // 若資料抓不到，fallback 到 default meta
  if (!roomPlan) {
    return {
      title: "房型資訊載入失敗｜StayMi",
      description: "無法載入房型資訊，請稍後再試。",
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${roomPlan.hotel_name} - ${roomPlan.room_type_name}｜StayMi`,
    description: `探索 ${roomPlan.hotel_name} 的 ${roomPlan.room_type_name}，位於 ${roomPlan.hotel_region}，訂閱價格為 NT$${roomPlan.subscription_price}/晚。`,
    openGraph: {
      title: `${roomPlan.hotel_name} - ${roomPlan.room_type_name}｜StayMi`,
      description: `探索 ${roomPlan.hotel_name} 的 ${roomPlan.room_type_name}，位於 ${roomPlan.hotel_region}，訂閱價格為 NT$${roomPlan.subscription_price}/晚。`,
      images: [roomPlan.hotel_room_images?.[0] || "/og-image.jpg", ...previousImages],
    },
  };
}

const BookingPage = async ({ params, searchParams }: Props) => {
  const { plan_id } = await params;
  let data;

  try {
    data = await UserRoomProductPlanApi.getHotelRoomProduct(plan_id);
  } catch (error) {
    console.error("API Error:", error);
    return notFound();
  }

  if (!data) {
    return notFound();
  }
  return (
    <Suspense>
      <ClientBookingPage serverData={data} />
    </Suspense>
  );
};

export default BookingPage;
