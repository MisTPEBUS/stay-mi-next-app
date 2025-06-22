"use client";

import Image from "next/image";
import React, { useState } from "react";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

import { title, description, subscriptionItems } from "./subscriptionData";

const typeLabel: Record<string, string> = {
  monthly: "月",
  yearly: "年",
};

const subscriptionOnClick = async (item: { plan: string; type: string | null; link?: string }) => {
  if (item.link) {
    window.open(item.link, "_blank", "noopener, noreferrer");
  } else {
    try {
      const response = await AxiosUserClient.put("/users/subscriptions/plan", JSON.stringify({ plan: item.plan }));
      if (response) {
        alert(response.data?.message || "訂閱成功");
      } else {
        alert("訂閱失敗");
      }
      console.log("Response:", response);
    } catch (e) {
      const errorMsg = e instanceof Error ? e.message : "訂閱失敗，請稍後再試";
      if (errorMsg.includes("找不到訂閱資訊")) {
        console.log("Response:123");
        const paypalRes = await AxiosUserClient.post("/paypal/create-subscription", {
          plan: item.plan,
          is_recurring: false,
          cycle: item.type,
          started_at: new Date().toISOString(),
        });
        console.log("Response:", paypalRes);
        location.href = paypalRes.data?.approveLink || "";
        return;
      }
      console.log("Error", e);
      alert(errorMsg);
    }
  }
};

const Subscription = () => {
  // 卡片展開狀態管理 定義key value
  const [noteCards, setNoteCards] = useState<{ [key: number]: boolean }>({});

  // 手機版 切換卡片展開/收折
  const toggleCard = (index: number) => {
    setNoteCards((prev: { [key: number]: boolean }) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mx-auto flex flex-col gap-5 px-3 pt-10 pb-32 md:gap-10 md:px-0 md:py-20 md:pb-40">
      <div>
        <div className="mb-3 text-center text-xl font-bold md:text-4xl">{title}</div>
        <div className="text-md text-center text-gray-400 md:text-xl">{description}</div>
      </div>
      <div className="mx-auto grid h-120 w-2/3 grid-cols-1 gap-4 md:w-full md:grid-cols-3">
        {subscriptionItems.map((item, index) => (
          <Card className="flex flex-col gap-2 p-4" key={index}>
            <CardHeader className="px-1 pb-0 md:px-4">
              <CardTitle className="text-lg font-bold md:text-center md:text-2xl">{item.title}</CardTitle>
              <CardDescription className="px-0 py-0 text-xs text-gray-400 md:text-center">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mb-0 px-1">
              <div className="text-2xl font-bold md:py-2 md:text-3xl">
                {Number(item.price) === 0
                  ? "免費"
                  : "NT $ " +
                    Number(item.price).toLocaleString() +
                    (item.type ? `/${typeLabel[item.type] ?? item.type}` : "")}
              </div>
            </CardContent>
            <CardContent className="mb-0 px-1">
              {/* 桌機版：直接顯示清單 */}
              <div className="hidden md:block">
                <ul className="list-disc px-8">
                  {item.note.map((n, i) => (
                    <li className="py-2" key={i}>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
              {/* 手機版：預設收折，點擊展開，帶平滑動畫 */}
              <div className="my-0 md:hidden">
                <button
                  type="button"
                  className="my-2 w-full rounded-md border border-black bg-transparent px-4 py-1 text-center font-bold text-black hover:bg-black hover:text-white"
                  onClick={async () => {
                    await subscriptionOnClick(item);
                  }}
                >
                  {item.buttonText}
                </button>
                <button
                  type="button"
                  className="text-black-600 flex w-full items-center justify-start text-left hover:text-blue-800"
                  onClick={() => toggleCard(index)}
                >
                  <span>{noteCards[index] ? "隱藏詳情" : "顯示詳情"}</span>
                  <Image
                    src={noteCards[index] ? "/icon/lucide/chevron-up.png" : "/icon/lucide/chevron-down.png"}
                    alt={noteCards[index] ? "收起" : "展開"}
                    width={20}
                    height={20}
                    className="mt-1 h-5 w-5"
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    noteCards[index] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc px-4">
                    {item.note.map((n, i) => (
                      <li className="py-2" key={i}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <button
                type="button"
                className="hidden w-full rounded-md border border-black bg-transparent px-4 py-1 text-center font-bold text-black hover:bg-black hover:text-white md:block"
                onClick={async () => {
                  await subscriptionOnClick(item);
                }}
              >
                {item.buttonText}
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
