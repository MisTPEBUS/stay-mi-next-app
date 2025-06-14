import type { Metadata } from "next";

import { RoomProductPlanApi } from "@/api/services/user/hotel/roomProductPlan";

export async function getBookingPageMetadata(plan_id: string): Promise<Metadata> {
  try {
    const plan = await RoomProductPlanApi.getHotelRoomProduct(plan_id);

    // 安全 fallback 處理
    const hotelName = plan?.hotel_name || "未命名飯店";
    const roomType = plan?.room_type_name || "未命名房型";
    const address = plan?.hotel_address || "地址未提供";
    const price =
      typeof plan?.price === "number"
        ? plan.price.toLocaleString("zh-TW", { style: "currency", currency: "TWD" })
        : "價格未定";

    const startDate =
      typeof plan?.start_time === "string" && plan.start_time.includes("T")
        ? plan.start_time.split("T")[0]
        : (plan?.start_time ?? "開始日未定");

    const endDate =
      typeof plan?.end_time === "string" && plan.end_time.includes("T")
        ? plan.end_time.split("T")[0]
        : (plan?.end_time ?? "結束日未定");

    const imageUrl =
      typeof plan?.hotel_cover_image === "string" && plan.hotel_cover_image.startsWith("http")
        ? plan.hotel_cover_image
        : "https://example.com/default-cover.jpg";

    const fullTitle = `${hotelName} - ${roomType} | ${price}`;
    const fullDesc = `${hotelName} 位於 ${address}，提供舒適的 ${roomType}，專案期間 ${startDate} 至 ${endDate}，優惠價格僅需 ${price} 起，立即預訂！`;

    return {
      title: fullTitle,
      description: fullDesc,
      openGraph: {
        title: fullTitle,
        description: `即日起至 ${endDate}，立即享有優惠！`,
        images: [{ url: imageUrl }],
        locale: "zh_TW",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: `價格 ${price} 起，立即預訂 ${hotelName} 的 ${roomType}！`,
        images: [imageUrl],
      },
    };
  } catch (err) {
    console.error("generateMetadata error:", err);
    return {
      title: "訂房計畫",
      description: "查看飯店詳細資訊與優惠方案。",
    };
  }
}
