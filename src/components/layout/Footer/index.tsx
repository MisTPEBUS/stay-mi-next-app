import React from "react";

import Logo from "../Logo";

import Sitemap from "./_components/Sitemap";
import MobileSitemap from "./_components/Sitemap/MobileSitemap";
import SocialLinks from "./_components/SocialLinks";
import { SitemapSection } from "./types";

const sitemap: SitemapSection[] = [
  {
    title: "EXPLORE ｜ 探索",
    items: [
      { label: "首頁", href: "#" },
      { label: "飯店導覽", href: "#" },
      { label: "訂閱方案", href: "#" },
      { label: "關於我們", href: "#" },
    ],
  },
  {
    title: "CITIES ｜ 城市",
    items: [
      { label: "台北市", href: "#" },
      { label: "台中市", href: "#" },
      { label: "高雄市", href: "#" },
      { label: "宜蘭縣", href: "#" },
      { label: "南投縣", href: "#" },
    ],
  },
  {
    title: "SPOTS ｜ 景點",
    items: [
      { label: "日月潭", href: "#" },
      { label: "太平山", href: "#" },
      { label: "墾丁", href: "#" },
      { label: "知本", href: "#" },
      { label: "綠島", href: "#" },
    ],
  },
  {
    title: "INFO ｜ 資訊",
    items: [
      { label: "常見問題", href: "/faq" },
      { label: "會員中心", href: "#" },
      { label: "聯絡我們", href: "#" },
      { label: "隱私政策", href: "#" },
      { label: "服務條款", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary bg-[url('/footer-bg.webp')] bg-cover bg-top md:h-[912px] md:py-[160px]">
      <div className="container m-auto flex flex-col justify-between px-6 pt-16 pb-6 md:flex-row md:px-0 md:py-0">
        <div className="flex flex-col items-center gap-10 md:items-start md:justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <Logo orientation="vertical" />
              <div className="font-bold text-white">不只是住一晚，是住進你的旅程裡</div>
            </div>
            <div className="text-secondary-300 hidden md:block">
              <p>staymi 不只是訂房網站，而是一段旅程的開始。</p>
              <p>我們相信，每一次停留，都值得被好好安放，</p>
              <p>讓你睡得好、醒得暖，才有力氣走向更遠的風景。</p>
            </div>
            <div className="text-secondary-300 md:hidden">
              <p>staymi 不只是訂房網站，</p>
              <p>而是一段旅程的開始。</p>
              <p>我們相信，每一次停留，都值得被好好安放，</p>
              <p>讓你睡得好、醒得暖，</p>
              <p>才有力氣走向更遠的風景。</p>
            </div>
          </div>
          <MobileSitemap data={sitemap} />
          <SocialLinks />
        </div>
        <Sitemap data={sitemap} />
      </div>
    </footer>
  );
};

export default Footer;
