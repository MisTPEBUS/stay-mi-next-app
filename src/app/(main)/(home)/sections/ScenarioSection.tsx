import { Hash } from "lucide-react";
import Image from "next/image";
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
    imageSrc: "/image_scenario_01.webp",
  },
  {
    title: "訂房時發現有訂閱價優惠？",
    content: "還在猶豫？加入訂閱方案就能立即享有折扣價，幫你輕鬆省下一筆。還可享專屬優惠通知。",
    imageSrc: "/image_scenario_02.webp",
  },
  {
    title: "入住前收到貼心提醒",
    content: "完成訂房後，您會收到詳細的入住通知與聯絡資訊，讓您安心出發、順利入住！",
    imageSrc: "/image_scenario_03.webp",
  },
];
const ScenarioSection = () => {
  return (
    <section className="py-16 md:py-[160px]">
      <div className="container mx-auto flex flex-col gap-6 px-6 md:gap-12 md:px-0">
        <SectionTitle content={title} />
        <div className="flex">
          <div className="flex w-full flex-col md:flex-row md:justify-between">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="relative pe-6 pt-6">
                <div className="absolute top-0 right-0 -bottom-2 flex h-fit flex-col items-center gap-2 rounded-full bg-black px-3 py-2 font-bold text-white md:py-4 md:text-2xl">
                  <Hash className="size-5 md:size-6" />
                  <p className="[letter-spacing:0.5rem] [writing-mode:vertical-rl]">{scenario.title}</p>
                </div>
                <div className="flex flex-col gap-6 md:w-[390px]">
                  <Image
                    src={scenario.imageSrc}
                    alt={scenario.title}
                    width={390}
                    height={560}
                    className="rounded-2xl"
                  />
                  <p className="text-black-sub md:text-xl">{scenario.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;
