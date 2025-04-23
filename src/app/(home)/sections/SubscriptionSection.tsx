import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

import SectionTitle from "../SectionTitle";
import { SectionTitleContent, SubscriptionPlanType } from "../types";

const title: SectionTitleContent = {
  heading: "專屬你的優惠體驗",
  label: "OFFERS",
};

const plans: SubscriptionPlanType[] = [
  {
    title: "Staymi Plus",
    subtitle: "享受專屬優惠價格",
    content: "訂閱即享飯店專屬優惠價格，輕鬆省下每一次的住宿費用。",
  },
  {
    title: "Staymi Pro",
    subtitle: "智慧旅宿體驗再升級",
    content:
      "除了優惠價格，再升級你的住宿體驗！透過 QR Code 解鎖飯店內專屬服務，如快速入住、會員專屬活動，讓旅程更流暢、更個人化。",
  },
];

const SubscriptionSection = () => {
  return (
    <section className="container mx-auto flex flex-col gap-6 px-6 py-16 md:flex-row md:px-0 md:py-[160px]">
      <SectionTitle content={title} orientation="vertical" />
      <div className="flex grid-cols-2 flex-col items-center gap-6 md:grid md:gap-16">
        <div className="bg-gray-cap h-[200px] w-full rounded-2xl md:h-full"></div>
        <div className="flex flex-col gap-6 md:gap-12">
          {plans.map((plan) => (
            <div key={plan.title} className="border-gray flex flex-col gap-3 py-3 md:border-b md:py-12">
              <div className="flex flex-col text-xl font-bold md:flex-row md:gap-2 md:text-2xl">
                <p>{plan.title}</p>
                <p className="ml-12 md:ml-0">── {plan.subtitle}</p>
              </div>
              <p>{plan.content}</p>
            </div>
          ))}
        </div>
        <Button className="col-span-2 w-full md:ml-auto md:w-fit" asChild>
          <Link href="#">立即訂閱</Link>
        </Button>
      </div>
    </section>
  );
};

export default SubscriptionSection;
