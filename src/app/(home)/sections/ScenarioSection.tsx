import { Hash } from "lucide-react";
import React from "react";

import SectionTitle from "../SectionTitle";
import { ScenarioType, SectionTitleContent } from "../types";

const title: SectionTitleContent = {
  heading: "旅行的每一步，我們都幫你想好了",
  label: "JOURNEY",
};

const scenarios: ScenarioType[] = [
  {
    title: "靈感來了，想找週末小旅行？",
    content: "打開我們的首頁，輸入地點與時間，馬上找到附近或熱門飯店。透過 GPS 定位更方便喔！",
    imageUrl: "",
  },
  {
    title: "訂房時發現有訂閱價優惠？",
    content: "還在猶豫？加入訂閱方案就能立即享有折扣價，幫你輕鬆省下一筆。還可享專屬優惠通知。",
    imageUrl: "",
  },
  {
    title: "入住前收到貼心提醒",
    content: "完成訂房後，您會收到詳細的入住通知與聯絡資訊，讓您安心出發、順利入住！",
    imageUrl: "",
  },
];
const ScenarioSection = () => {
  return (
    <section className="bg-[#121212]/5 py-16 md:py-[160px]">
      <div className="container mx-auto flex flex-col gap-6 px-6 md:gap-12 md:px-0">
        <SectionTitle content={title} />
        <div className="flex">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="flex flex-col gap-6">
                <div className="relative md:pe-6 md:pt-6">
                  <div className="absolute right-0 -bottom-2 flex h-fit items-center gap-2 rounded-full rounded-r-none bg-black px-3 py-2 font-bold text-white md:top-0 md:flex-col md:rounded-full md:py-4 md:text-2xl">
                    <Hash className="size-5 md:size-6" />
                    <p className="md:[letter-spacing:0.5rem] md:[writing-mode:vertical-rl]">{scenario.title}</p>
                  </div>
                  <div className="bg-gray-cap h-[200px] rounded-2xl md:h-[560px]"></div>
                </div>
                <p className="text-black-sub md:me-6 md:text-xl">{scenario.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
