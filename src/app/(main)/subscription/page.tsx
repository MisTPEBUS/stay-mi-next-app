"use client";

import React from "react";

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
  return (
    <div className="container mx-auto flex flex-col gap-5 px-3 py-10 md:gap-10 md:px-0 md:py-20">
      <div>
        <div className="mb-3 text-center text-xl font-bold md:text-4xl">{title}</div>
        <div className="text-md text-center text-gray-400 md:text-xl">{description}</div>
      </div>
      <div className="mx-auto grid h-120 w-2/3 grid-cols-1 gap-4 md:w-full md:grid-cols-3">
        {subscriptionItems.map((item, index) => (
          <Card className="p-5" key={index}>
            <CardHeader className="px-5 pb-0">
              <CardTitle className="text-center text-2xl font-bold">{item.title}</CardTitle>
              <CardDescription className="p-0 text-center text-xs text-gray-400">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="mb-1 px-1">
              <div className="px-0 py-5 text-3xl font-bold">
                {Number(item.price) === 0
                  ? "FREE"
                  : "NT $ " +
                    Number(item.price).toLocaleString() +
                    (item.type ? `/${typeLabel[item.type] ?? item.type}` : "")}
              </div>
              <div>
                <ul className="list-disc px-8">
                  {item.note.map((n, i) => (
                    <li className="py-2" key={i}>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="mt-auto flex justify-center">
              <button
                type="button"
                className="w-full rounded-md border border-black bg-transparent px-4 py-1 text-center font-bold text-black hover:bg-black hover:text-white"
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
