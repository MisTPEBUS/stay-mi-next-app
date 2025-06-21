import { ProductPlanPublicType, ProductPlanType } from "@/schema/dashboard/productPlan.dto";
import { calculateNights } from "@/utils/format";

import { GiftItem, OrderData, RoomPlanOrderRaw } from "../types";

export function transformOrderData(input: RoomPlanOrderRaw): OrderData {
  const nights = calculateNights(input.check_in_date, input.check_out_date);
  const total = input.base_price * nights;

  return {
    id: "[系統產生]",
    hotel_id: input.hotel_id,
    room_plan_id: input.room_plan_id,
    status: "pending",
    date: new Date().toISOString().split("T")[0],
    total,
    item: {
      id: "gift0",
      name: "尚未選擇伴手禮",
      quantity: 0,
      price: 0,
    },
    shippingMethod: "尚未選擇",
    paymentMethod: "尚未付款",
    bookingInfo: {
      checkInDate: input.check_in_date,
      checkOutDate: input.check_out_date,
      roomType: input.room_type_name,
      nights,
      hotel: {
        name: input.hotel_name,
        image: input.hotel_cover_image,
        pricePerNight: input.base_price,
        address: input.hotel_address,
        phone: input.hotel_phone,
      },
    },
  };
}
export function transformGiftItems(input: ProductPlanPublicType[]): GiftItem[] {
  return input.map((plan) => ({
    id: plan.id,
    name: plan.product_name,
    price: plan.price,
    image: plan.product_imageUrl || "",
  }));
}

export const getFinalTotal = (order: OrderData): number => {
  const hotelTotal = (order.bookingInfo?.hotel?.pricePerNight ?? 0) * (order.bookingInfo?.nights ?? 0);

  const giftTotal = (order.item?.price ?? 0) * (order.item?.quantity ?? 0);

  return hotelTotal + giftTotal;
};

export const ProductPlansToItems = (plans: ProductPlanType[]): GiftItem[] => {
  return plans.map((plan) => ({
    id: plan.product_id,
    name: plan.product_name ?? "",
    price: plan.price,
    image: plan.product_imageUrl ?? "",
  }));
};
