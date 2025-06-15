"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import OrderCard from "./_components/OrderCard";

const tabConfig = [
  { label: "全部", value: "all" },
  { label: "代付款", value: "pending" },
  { label: "已訂購", value: "paid" },
  { label: "完成訂單", value: "completed" },
  { label: "取消訂單", value: "canceled" },
];

const AccountPage = () => {
  const [state, setState] = useState("all");
  return (
    <div className="bg-white-pure rounded-2xl p-6">
      <div className="mb-10 text-xl font-bold md:text-2xl">訂單管理</div>
      <div className="border-gray-light/50 overflow-x-auto border-b">
        <div className="flex min-w-max gap-4 md:gap-10">
          {tabConfig.map((item) => (
            <div
              key={item.label}
              onClick={() => setState(item.value)}
              className={twMerge(
                "py-3 font-bold",
                state === item.value ? "border-primary border-b-4" : "text-black-sub"
              )}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <OrderCard />
    </div>
  );
};

export default AccountPage;
