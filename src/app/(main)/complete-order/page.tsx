"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import * as React from "react";

import { useOrderRoomProductQuery } from "@/hooks/react-query/front-end/useOrderRoomProductQuery";

import { ContactFooter } from "./components/ContactFooter";
import { HotelBookingCard } from "./components/HotelBookingCard";
import { OrderSummaryCard } from "./components/OrderSummaryCard";
import PaymentActionButtons from "./components/PaymentActionButtons";
import { SouvenirCard } from "./components/SouvenirsCard";
import { PaymentSuccessHeader } from "./components/StatusHeader";
import { transformOrderData } from "./components/dataTransform";

const CompleteOrderPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  if (!orderId) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-foreground mb-2 text-2xl font-semibold">載入失敗</h2>
          <p className="text-muted-foreground">無法載入訂單資料，請確認ID是否存在。</p>
        </div>
      </div>
    );
  }
  const { data, isLoading, error } = useOrderRoomProductQuery(orderId);

  if (isLoading) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="loader">讀取中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-foreground mb-2 text-2xl font-semibold">載入失敗</h2>
          <p className="text-muted-foreground">無法載入訂單資料，請稍後再試。</p>
        </div>
      </div>
    );
  }

  /* if (!data) {
    return (
      <div className="bg-background flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-foreground mb-2 text-2xl font-semibold">找不到訂單</h2>
          <p className="text-muted-foreground">查無此訂單資料。</p>
        </div>
      </div>
    );
  } */
  console.log("orderId", orderId);
  console.log("order", data);
  const orderDetails = transformOrderData({ order: data });

  return (
    <div className="bg-background min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <PaymentSuccessHeader orderId={orderDetails.orderId} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <HotelBookingCard booking={orderDetails.hotelBooking} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SouvenirCard souvenirs={orderDetails.souvenirs} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <OrderSummaryCard orderDetails={orderDetails} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <PaymentActionButtons />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <ContactFooter />
        </motion.div>
      </div>
    </div>
  );
};

export default CompleteOrderPage;
