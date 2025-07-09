"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

import IconArrowRight from "@/components/Icons/IconArrowRight";
import { Button } from "@/components/ui/button";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

import OrderActionButtons from "./OrderActionButtons";

export type OrderCardProps = {
  order: OrderDetailType;
};

const statusMap: Record<"pending" | "confirmed" | "cancelled", { text: string; className: string }> = {
  pending: {
    text: "待付款",
    className: "bg-primary text-white",
  },
  confirmed: {
    text: "已付款",
    className: "bg-black-main text-white",
  },
  cancelled: {
    text: "取消",
    className: "bg-secondary text-white",
  },
};

const OrderCard = ({ order }: OrderCardProps) => {
  const statusMeta = statusMap[order.status];
  const router = useRouter();
  return (
    <div className="border-gray-light/50 flex flex-col gap-6 border-b py-6 md:flex-row">
      <div className="bg-gray h-40 w-full rounded-2xl md:size-40"></div>
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xl font-bold md:text-2xl">
            <span
              className={twMerge(
                "flex h-7 items-center rounded-[0.5rem] px-2 text-sm font-bold md:text-base",
                statusMeta.className
              )}
            >
              {statusMeta.text}
            </span>
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className="text-black-sub border-black-sub flex h-7 items-center rounded-[0.5rem] border p-2 text-sm">
                房型
              </span>
              {order.room_name}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-black-sub border-black-sub flex h-7 items-center rounded-[0.5rem] border p-2 text-sm">
                日期
              </span>
              {order.check_in_date ?? "無入住日期"}
            </p>
            <p className="flex items-center gap-2">
              <span className="text-black-sub border-black-sub flex h-7 items-center rounded-[0.5rem] border p-2 text-sm">
                價格
              </span>
              ${order.total_price?.toLocaleString() ?? "0"}
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-between gap-4 md:items-end">
          <div className="flex gap-4">
            <OrderActionButtons order={{ status: order.status, check_in_date: order.check_in_date }} />
          </div>
          {/* <div className="flex gap-4">
            <Button variant="outline" className="w-fit rounded-[0.5rem]">
              <Plus />
              再訂一次
            </Button>
            <Button variant="outline" className="w-fit rounded-[0.5rem]">
              <ThumbsUp />
              寫下評價
            </Button>
          </div> */}
          <Button
            size="square"
            className="w-full md:w-fit"
            onClick={() => router.push(`/complete-order?orderId=${order.id}`)}
          >
            查看訂單資訊
            <IconArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
