"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { useOrderRoomProductQueryAll } from "@/hooks/react-query/front-end/useOrderRoomProductQuery";

import OrderCard from "./_components/OrderCard";

type OrderStatus = "all" | "pending" | "confirmed" | "cancelled";

const tabConfig = [
  { label: "全部", value: "all" },
  { label: "待付款", value: "pending" },
  { label: "已訂購", value: "confirmed" },
  { label: "取消訂單", value: "canceled" },
];

const AccountPage = () => {
  const [state, setState] = useState<OrderStatus>("all");
  const { data, isLoading, error } = useOrderRoomProductQueryAll({ status: state });

  return (
    <div className="bg-white-pure rounded-2xl p-6">
      <div className="mb-10 text-xl font-bold md:text-2xl">訂單管理</div>
      <div className="border-gray-light/50 overflow-x-auto border-b">
        <div className="flex min-w-max gap-4 md:gap-10">
          {tabConfig.map((item) => (
            <div
              key={item.label}
              onClick={() => setState(item.value as OrderStatus)}
              className={twMerge(
                "cursor-pointer py-3 font-bold",
                state === item.value ? "border-primary border-b-4" : "text-black-sub"
              )}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {isLoading && <div className="text-black-main flex items-center justify-center py-10 text-sm">載入中...</div>}

      {error && <div className="text-primary flex items-center justify-center py-10 text-sm">發生錯誤，請稍後再試</div>}

      {!isLoading && !error && data?.orders.length === 0 && (
        <div className="text-black-main flex items-center justify-center py-10 text-sm">尚無訂單紀錄</div>
      )}

      {!isLoading && !error && data?.orders.map((order) => <OrderCard key={order.id} order={order} />)}
    </div>
  );
};

export default AccountPage;
