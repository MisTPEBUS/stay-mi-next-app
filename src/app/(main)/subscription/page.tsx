"use client";

import React from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

import { title, description, subscriptionItems } from "./subscriptionData";

const typeLabel: Record<string, string> = {
  monthly: "月",
  yearly: "年",
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
                  if (item.link) {
                    window.open(item.link, "_blank", "noopener,noreferrer");
                  } else {
                    try {
                      const res = await fetch("/api/subscribe", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ plan: item.title }),
                      });
                      if (res.ok) {
                        alert("訂閱成功");
                      } else {
                        alert("訂閱失敗");
                      }
                    } catch (e) {
                      console.log("Error", e);
                    }
                  }
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
