import React from "react";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
      <div className="mx-auto grid h-96 w-2/3 grid-cols-1 gap-4 md:w-full md:grid-cols-3">
        {subscriptionItems.map((item, index) => (
          <Card className="px-5" key={index}>
            <CardHeader className="p-5 text-center text-2xl font-bold">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="p-0 text-center text-xs text-gray-400">{item.description}</CardDescription>
            </CardHeader>
            <div>
              {Number(item.price) === 0
                ? "FREE"
                : "NT $ " +
                  Number(item.price).toLocaleString() +
                  (item.type ? `/${typeLabel[item.type] ?? item.type}` : "")}
            </div>
            <div>
              <ul className="list-disc pl-5">
                {item.note.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
