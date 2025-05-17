import { BellRing, Binoculars, CircleCheckBig, Eye } from "lucide-react";
import React from "react";

import IconArrowRight from "@/components/Icons/IconArrowRight";

import SectionTitle from "../SectionTitle";
import { SectionTitleContent, StepType } from "../types";

const title: SectionTitleContent = {
  heading: "從搜尋到入住，就這麼簡單",
  label: "BOOKING",
};

const steps: StepType[] = [
  {
    stepId: "01",
    title: "搜尋飯店",
    content: "輸入目的地與日期，一鍵快速找到符合需求的優質飯店。",
    icon: Binoculars,
  },
  {
    stepId: "02",
    title: "瀏覽與比較",
    content: "查看詳細資訊、評價與訂閱優惠，輕鬆比較找到最適合的選擇。",
    icon: Eye,
  },
  {
    stepId: "03",
    title: "訂房與付款",
    content: "完成訂閱或以原價預訂，支援多種付款方式，流程簡單又安全。",
    icon: CircleCheckBig,
  },
  {
    stepId: "04",
    title: "入住提醒",
    content: "出發前自動提醒，不漏接任何細節，還能透過 QR Code 快速報到、享受訂閱專屬服務。",
    icon: BellRing,
  },
];

const StepSection = () => {
  return (
    <section className="bg-[#121212]/5 py-16 md:py-[160px]">
      <div className="container mx-auto flex flex-col gap-6 px-6 md:gap-12 md:px-0">
        <SectionTitle content={title} />
        <div className="grid gap-4 md:grid-cols-4 md:gap-18">
          {steps.map((step) => (
            <div key={step.stepId} className="relative">
              {step.stepId !== "01" && (
                <IconArrowRight className="top-1/2 -left-12 hidden size-6 -translate-y-1/2 text-gray-400 md:absolute md:block" />
              )}
              <div className="hidden size-16 items-center justify-center self-start rounded-tl-2xl rounded-br-2xl bg-[#121212]/5 text-2xl font-bold md:absolute md:flex">
                {step.stepId}
              </div>
              <div className="flex h-full items-center gap-4 rounded-2xl bg-white p-4 md:flex-col md:p-6">
                <step.icon className="text-primary mx-auto my-4 size-9 md:size-12" />
                <div className="flex flex-1 flex-col md:gap-4">
                  <div className="text-xl font-bold md:text-center md:text-2xl">{step.title}</div>
                  <div className="text-gray-600">{step.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;
