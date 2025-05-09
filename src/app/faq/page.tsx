import React from "react";

import FaqItem from "@/components/FaqItem";
import { generateMetadata } from "@/utils/seo";

export type FaqData = { question: string; answer: string };

const faqItems: FaqData[] = [
  {
    question: "平台上的訂閱方案是什麼？對我有什麼幫助？",
    answer:
      "我們提供訂閱制優惠，訂閱用戶可享有特定飯店的專屬折扣與方案比較。您可以在訂房時看到原價與訂閱價格，輕鬆比較後決定是否加入訂閱。",
  },
  {
    question: "如果行程有變，我可以取消訂房嗎？",
    answer:
      "可以的！請在您的會員中心的「訂單管理」中找到該筆訂單，依照飯店的取消政策進行取消操作。部分飯店可能會酌收手續費，請詳閱相關規定。",
  },
  {
    question: "我可以攜帶寵物入住嗎？",
    answer:
      "是否可攜帶寵物依飯店而定，您可以在飯店資訊頁中查看是否標示「寵物友善」。我們也提供篩選功能，讓您快速找到適合帶毛孩的住宿。",
  },
  {
    question: "平台有提供哪些附加服務？",
    answer:
      "依飯店不同，可能提供免費早餐、停車場、接駁服務、行李寄存、無障礙設施等資訊，您都可以在飯店頁面查看並進行比對。",
  },
  {
    question: "我要怎麼收到訂房通知或提醒？",
    answer: "一旦完成訂房，我們會透過 Email 發送通知與入住提醒。請確認您的聯絡資料是最新的。",
  },
];
export const metadata = generateMetadata({
  title: "FAQ",
  description: "常見問題",
  url: "https://staymi.vercel.app/faq",
});

const Faq = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 py-10 md:gap-10 md:py-20">
      <div className="text-center text-xl font-bold md:text-4xl">常見問題</div>
      <div className="mx-3 flex flex-col gap-6 md:mx-0">
        {faqItems.map((item) => (
          <FaqItem key={item.question} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
