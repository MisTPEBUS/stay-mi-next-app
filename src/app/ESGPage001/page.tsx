"use client";

import { Leaf, Users, Shield } from "lucide-react";
import React from "react";

import ESGContact from "./components/ESGContact";
import ESGFooter from "./components/ESGFooter";
import ESGHero from "./components/ESGHero";
import ESGOverView from "./components/ESGOverView";
import ESGPillars, { ESGPillar } from "./components/ESGPillars";
import ESGReportDownload from "./components/ESGReportDownload";

const esgPillars: ESGPillar[] = [
  {
    id: "environmental",
    title: "環境保護",
    description: "致力於減少碳足跡，在所有營運中推動可持續發展實踐，保護地球環境。",
    icon: <Leaf className="h-8 w-8" />,
    color: "bg-green-500",
    stats: [
      { value: "50%", label: "碳排放減少" },
      { value: "100%", label: "再生能源" },
      { value: "75%", label: "廢物減量" },
    ],
    initiatives: ["2030年實現碳中和營運", "可持續供應鏈合作夥伴", "綠色建築認證", "再生能源投資"],
  },
  {
    id: "social",
    title: "社會責任",
    description: "培育包容性社區，確保所有利益相關者得到公平對待，創造共享價值。",
    icon: <Users className="h-8 w-8" />,
    color: "bg-blue-500",
    stats: [
      { value: "45%", label: "女性領導比例" },
      { value: "95%", label: "員工滿意度" },
      { value: "200萬", label: "社區投資" },
    ],
    initiatives: ["多元化與包容性計劃", "員工健康福利倡議", "社區發展專案", "教育合作夥伴關係"],
  },
  {
    id: "governance",
    title: "公司治理",
    description: "維持最高標準的企業治理和商業道德實踐，確保透明負責的營運。",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-purple-500",
    stats: [
      { value: "100%", label: "董事會獨立性" },
      { value: "0", label: "道德違規" },
      { value: "AAA", label: "ESG評級" },
    ],
    initiatives: ["透明報告實踐", "定期董事會評估", "全面風險管理", "利益相關者參與計劃"],
  },
];
const ESGWebpage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <style jsx>{`
        :root {
          --primary-green: #10b981;
          --primary-green-light: #34d399;
          --primary-green-dark: #059669;
          --secondary-blue: #3b82f6;
          --secondary-blue-light: #60a5fa;
          --secondary-purple: #8b5cf6;
          --secondary-purple-light: #a78bfa;
          --accent-orange: #f59e0b;
          --accent-pink: #ec4899;
          --neutral-gray: #6b7280;
        }
      `}</style>

      <ESGHero></ESGHero>
      <ESGOverView></ESGOverView>
      <ESGPillars pillars={esgPillars}></ESGPillars>
      <ESGReportDownload></ESGReportDownload>
      <ESGContact></ESGContact>
      <ESGFooter></ESGFooter>
    </div>
  );
};

export default ESGWebpage;
