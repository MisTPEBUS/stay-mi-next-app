"use client";

import { Leaf, Building2, FileText } from "lucide-react";

const ESGHero = () => {
  return (
    <div className="relative mb-8 overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&crop=center"
          alt="ESG永續發展背景"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-blue-900/70 to-green-800/80" />
      </div>

      <div className="relative z-10 px-8 py-16 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">ESG永續發展報告書下載</h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/90">
          下載我們的環境、社會及治理 (ESG) 相關報告書，了解企業永續發展的具體實踐與成果
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6" />
            <span className="text-sm font-medium">環境保護</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-sm font-medium">社會責任</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-medium">公司治理</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESGHero;
