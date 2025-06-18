import React from "react";

import { Accordion, AccordionItem, FaqAccordionContent, FaqAccordionTrigger } from "@/components/ui/accordion";

import { faqItems } from "../faq/faqData";

const About = () => {
  return (
    <>
      <div className="flex h-60 items-center bg-[url('/kv.webp')] bg-cover md:bg-top"></div>
      <div className="container mx-auto flex flex-col gap-5 px-3 py-10 md:gap-10 md:px-0 md:py-20">
        <div className="flex flex-col gap-3">
          <p className="text-center text-[40px] font-bold">staymi 是專為旅人打造的訂閱住宿平台</p>
          <p className="text-gray-cap text-center text-xl">
            以訂閱開啟全新的旅行方式，無需再為住宿費用煩惱。Staymi 幫你把住宿變得更簡單、更實惠、更貼近生活。
          </p>
        </div>
        <div>
          <p className="mb-4 text-2xl font-bold">我們的使命：讓旅行回歸純粹的享受</p>
          <p>每一次旅行，都值得被期待。但在訂房、比價、確認優惠的過程中，許多旅人早已疲憊不堪。</p>
          <p>
            Staymi
            認為，住宿應該是一件簡單的事。我們透過訂閱制的方式，讓你用最簡單的方式，擁有專屬的住宿優惠、彈性的選擇、安心的入住體驗。
          </p>
        </div>
        <div>
          <p className="mb-4 text-2xl font-bold">我們解決了這些問題</p>
          <ul className="list-inside list-disc">
            <li>飯店價格不透明？→ 訂閱後直接顯示優惠價與省下的金額</li>
            <li>訂房流程繁瑣？→ 系統自動儲存偏好，快速預訂</li>
            <li>資訊過多難比較？→ 精選合作飯店，搭配分類與篩選</li>
            <li>想要更多體驗？→ Staymi Pro 提供會員專屬服務與入住房禮</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-2xl font-bold">三種方案，為不同旅人量身打造</p>
          <p>Staymi Standard、Plus、Pro — 每個方案都對應不同需求，從價格優惠到專屬服務，總有一個適合你。</p>
        </div>
        <div>
          <p className="mb-4 text-2xl font-bold">我們正在擴展的足跡</p>
          <ul className="list-inside list-disc">
            <li>合作飯店：超過 150 家優質飯店上架中</li>
            <li>服務區域：台北、新北、台中、高雄... 持續拓展中</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-2xl font-bold">常見問題</p>
          <Accordion type="multiple" className="flex flex-col gap-6">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="bg-white-pure rounded-2xl border-none"
              >
                <FaqAccordionTrigger>{item.question}</FaqAccordionTrigger>
                <FaqAccordionContent>{item.answer}</FaqAccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default About;
