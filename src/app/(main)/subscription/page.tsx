import React from "react";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { generateMetadata } from "@/utils/seo";

import { title, subscriptionItems } from "./subscriptionData";

export const metadata = generateMetadata({
  title: "Subscription",
  description: "訂閱方案",
  url: "https://staymi.vercel.app/subscription",
});

const typeLabel: Record<string, string> = {
  monthly: "月",
  yearly: "年",
};

const Subscription = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 px-3 py-10 md:gap-10 md:px-0 md:py-20">
      <div className="text-center text-xl font-bold md:text-4xl">
        {title}
        {subscriptionItems.length}
      </div>
      <div className="mx-auto grid h-120 w-2/3 grid-cols-1 gap-4 md:w-full md:grid-cols-3">
        {subscriptionItems.map((item, index) => (
          <Card className="p-5" key={index}>
            <CardHeader className="px-5 pb-0">
              <CardTitle className="text-center text-2xl font-bold">{item.title}</CardTitle>
              <CardDescription className="p-0 text-center text-xs text-gray-400">{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="px-1">
              <div className="px-0·py-5·text-3xl·font-bold">
                {Number(item.price) === 0
                  ? "FREE"
                  : "NT $ " +
                    Number(item.price).toLocaleString() +
                    (item.type ? `/${typeLabel[item.type] ?? item.type}` : "")}
              </div>
              <div>
                <ul className="list-disc px-8">
                  {item.note.map((n, i) => (
                    <li className="py-1" key={i}>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
