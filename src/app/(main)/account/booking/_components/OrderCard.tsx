import { CreditCard, Plus, ThumbsUp, X } from "lucide-react";
import React from "react";

import IconArrowRight from "@/components/Icons/IconArrowRight";
import { Button } from "@/components/ui/button";

const OrderCard = () => {
  return (
    <div className="border-gray-light/50 flex flex-col gap-6 border-b py-6 md:flex-row">
      <div className="bg-gray h-40 w-full rounded-2xl md:size-40"></div>
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xl font-bold md:text-2xl">
            <span className="bg-primary flex h-7 items-center rounded-[0.5rem] px-2 text-sm font-bold text-white md:text-base">
              待付款
            </span>
            晨曦旅居
          </p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <span className="text-black-sub border-black-sub flex h-7 items-center rounded-[0.5rem] border p-2 text-sm">
                房型
              </span>
              經典雙人房
            </p>
            <p className="flex items-center gap-2">
              <span className="text-black-sub border-black-sub flex h-7 items-center rounded-[0.5rem] border p-2 text-sm">
                日期
              </span>
              2025/04/28
            </p>
            <p className="flex items-center gap-2">
              <span className="text-black-sub border-black-sub flex h-7 items-center rounded-[0.5rem] border p-2 text-sm">
                價格
              </span>
              $2,880
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-between gap-4 md:items-end">
          <div className="flex gap-4">
            <Button variant="outline" size="square" className="flex-1">
              <X />
              取消訂單
            </Button>
            <Button size="square" className="flex-1">
              <CreditCard />
              立即付款
            </Button>
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
          <Button size="square" className="w-full md:w-fit">
            查看訂單資訊
            <IconArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
