"use client";

import React, { useEffect, useState } from "react";

import { SubscriptionApi } from "@/api/services/user/subscription";
import { useAuthStore } from "@/store/useAuthStore";

import SubscriptionItem from "./_components/SubscriptionItem";

export type SubscriptionType = {
  title: string;
  description: string;
  price: string;
  content: string[];
  button: string;
  cycle: string;
};

const planOptions: SubscriptionType[] = [
  {
    title: "free",
    description: "適合所有註冊用戶，提供基本的訂房與收藏功能",
    price: "Free",
    content: ["免費註冊即可使用", "使用網站訂房服務", "收藏飯店並儲存為個人清單", "接收訂房成功通知及入住提醒"],
    button: "立即註冊",
    cycle: "yearly",
  },
  {
    title: "plus",
    description: "提供訂房折扣、會員專屬優惠與進階功能",
    price: "NT $ 1,500/月",
    content: [
      "所有 Standard 方案功能",
      "訂房可享有固定折扣優惠",
      "可預訂會員專屬方案",
      "折扣推播及Email提醒",
      "獲得專屬客服支援",
    ],
    button: "升級 Plus",
    cycle: "monthly",
  },
  {
    title: "pro",
    description: "年度付費會員，享有完整體驗與尊榮服務",
    price: "NT $ 9,999/年",
    content: [
      "所有 Plus 方案功能",
      "支援 QR Code 智慧入住",
      "入住可享會員體驗禮",
      "獨享 Pro 合作飯店商務服務",
      "不定期 Pro 專屬優惠",
      "優先參與平台新功能測試或活動活動邀請",
    ],
    button: "升級 Pro",
    cycle: "yearly",
  },
];

const Subscription = () => {
  const [currentPlan, setCurrentPlan] = useState("visitor");

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const res = await SubscriptionApi.getStatus();
        setCurrentPlan(res.data.subscriptions.plan ?? "free");
      };

      getData();
    }
  }, [user]);
  return (
    <>
      <div className="flex h-60 items-center bg-[url('/kv.webp')] bg-cover md:bg-top"></div>
      <div className="container mx-auto flex flex-col gap-5 px-6 py-10 md:gap-10 md:px-0 md:py-20">
        <div className="flex flex-col gap-3">
          <p className="text-center text-2xl font-bold md:text-[40px]">訂閱方案</p>
          <p className="text-gray-cap text-center md:text-xl">依照您的需求選擇適合的方案</p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          {planOptions.map((item) => (
            <SubscriptionItem key={item.title} plan={item} current={currentPlan} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscription;
