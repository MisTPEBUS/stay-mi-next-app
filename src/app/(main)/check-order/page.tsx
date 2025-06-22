"use client";

import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";

import { UserPaypalApi } from "@/api/services/user/paypal";
import { useUserProductPlans } from "@/hooks/react-query/front-end/useUserProductPlans";
import { useOrderStore } from "@/store/useOrderStore";

import { BookingInfoCard } from "./components/BookingInfoCard";
import { OrderDetailsCard } from "./components/OrderDetailsCard";
import { ProductCarousel } from "./components/ProductCarousel";
import { CustomerInfoForm } from "./components/customerInfoForm";
import { OrderContactSchemaType } from "./components/customerInfoForm/schemas";
import { transformGiftItems, transformOrderData } from "./components/dataTransform";
import { type SelectedGift, type GiftItem, SubmitOrderSchema } from "./types";

const CheckOrderPage = () => {
  const rawOrder = useOrderStore((state) => state.data);
  console.log("store", rawOrder);
  const { data } = useUserProductPlans(rawOrder?.hotel_id);
  const order = rawOrder ? transformOrderData(rawOrder) : null;
  const giftItems = transformGiftItems(data ?? []);
  console.log("giftItems", data);

  const [selectedGift, setSelectedGift] = useState<SelectedGift | null>(() => {
    if (!order?.item) return null;
    return {
      item: order.item,
      quantity: order.item.quantity,
    };
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleGiftQuantityChange = useCallback((type: "increase" | "decrease") => {
    setSelectedGift((prev) => {
      if (!prev) return null;
      const newQuantity = type === "increase" ? prev.quantity + 1 : prev.quantity - 1;

      if (newQuantity <= 0) return null;

      return { ...prev, quantity: newQuantity };
    });
  }, []);

  const handleFormSubmit = async (formData: OrderContactSchemaType) => {
    setIsSaving(true);

    if (!order) {
      console.error("缺少 order ");
      setIsSaving(false);
      return;
    }

    const finalPayload = {
      hotel_id: order.hotel_id,
      room_plans_id: order.room_plan_id,
      check_out_date: order.bookingInfo?.checkOutDate,
      check_in_date: order.bookingInfo?.checkInDate,
      payment_name: formData.customerFirstName + formData.customerLastName,
      payment_phone: formData.customerPhone,
      payment_email: formData.customerEmail,
      contact_name: formData.contactFirstName + formData.contactLastName,
      contact_phone: formData.contactPhone,
      contact_email: formData.contactEmail,
      ...(selectedGift && {
        product_plans_id: selectedGift.item.id,
        quantity: selectedGift.quantity,
      }),
    };

    const parsed = SubmitOrderSchema.safeParse(finalPayload);

    if (!parsed.success) {
      const errorMessages = parsed.error.flatten().fieldErrors;
      console.error("驗證失敗", errorMessages);
      setIsSaving(false);
      return;
    }

    const validated = parsed.data;
    try {
      const { approveLink } = await UserPaypalApi.createPaypalOrder(validated);
      // 導頁到 PayPal
      window.location.href = approveLink;
    } catch (err) {
      console.error("建立 PayPal 訂單失敗", err);
      // 可視情況使用 toast 或 UI 告知使用者
    } finally {
      setIsSaving(false);
    }
  };
  const hotelTotal = (order?.bookingInfo?.hotel?.pricePerNight ?? 0) * (order?.bookingInfo?.nights ?? 0);
  const giftTotal = selectedGift ? selectedGift.item.price * selectedGift.quantity : 0;
  const finalTotal = giftTotal + hotelTotal;
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center"
        >
          <h1 className="text-foreground text-3xl font-bold md:text-4xl">訂單資訊</h1>
          <p className="text-muted-foreground">管理您的訂單詳情與訂房資料</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <OrderDetailsCard
            selectedGift={selectedGift}
            handleGiftQuantityChange={handleGiftQuantityChange}
            finalTotal={finalTotal}
          />
          {order?.bookingInfo && <BookingInfoCard bookingInfo={order.bookingInfo} hotelBookingTotal={hotelTotal} />}
        </div>

        <CustomerInfoForm handleFormSubmit={handleFormSubmit} isSaving={isSaving} />

        <ProductCarousel
          giftItems={giftItems}
          selectedGift={selectedGift}
          handleSelectGift={(gift: GiftItem) => setSelectedGift({ item: gift, quantity: 1 })}
          handleGiftQuantityChange={handleGiftQuantityChange}
        />
      </div>
    </div>
  );
};

export default CheckOrderPage;
