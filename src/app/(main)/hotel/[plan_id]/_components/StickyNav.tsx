"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const sections = [
  { id: "room", label: "房型介紹" },
  { id: "hotel", label: "飯店介紹" },
  { id: "other", label: "其他房型" },
  { id: "facility", label: "伴手禮" },
  { id: "review", label: "評價" },
  { id: "transport", label: "交通方式" },
  { id: "policy", label: "住宿規定" },
];

type StickyNavProps = {
  price: number;
  onOrderClick: () => void;
};
export const StickyNav = ({ price, onOrderClick }: StickyNavProps) => {
  const [activeId, setActiveId] = useState<string>("room");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-100px 0px -70% 0px", // 預留導覽高度
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    elements.forEach((el) => el && observer.observe(el!));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el!));
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[48px] z-30 flex items-center justify-between bg-white py-4 md:top-[80px]">
      <div className="text-black-sub flex gap-6 overflow-x-auto font-bold">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="hover:text-primary relative cursor-pointer pb-1 transition-colors"
            data-active={activeId === item.id}
          >
            <span className={`${activeId === item.id ? "text-black" : ""} whitespace-nowrap`}>{item.label}</span>
            {activeId === item.id && <span className="bg-primary absolute bottom-0 left-0 h-[2px] w-full" />}
          </button>
        ))}
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <h3 className="text-primary font-bold">{price} / 晚</h3>
        <Button className="bg-primary rounded-2xl px-6 py-4 font-bold text-white" onClick={onOrderClick}>
          立即訂房
        </Button>
      </div>
    </div>
  );
};
