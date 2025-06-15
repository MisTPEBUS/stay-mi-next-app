"use client";
import React from "react";

import SectionTitle from "@/app/(main)/(home)/SectionTitle";
import { SectionTitleContent } from "@/app/(main)/(home)/types";

type PolicySection = {
  title: string;
  contentHtml: string;
};

const title: SectionTitleContent = {
  heading: "系統住宿訂房須知",
  label: "POLICIES",
};

const parseRoomHtml = (html: string): PolicySection[] => {
  return html.split(/<hr\s*\/?>/i).map((block) => {
    const titleMatch = block.match(/<h\d[^>]*>(.*?)<\/h\d>/i);
    const title = titleMatch?.[1]?.trim() || "未命名段落";
    const content = block.replace(/<h\d[^>]*>.*?<\/h\d>/i, "").trim();
    return {
      title,
      contentHtml: content,
    };
  });
};

const RoomHTMLPanel = ({ html, isSection }: { html: string; isSection: boolean }) => {
  const sections = parseRoomHtml(html);

  return (
    <section>
      <SectionTitle content={title} className="mb-8 md:mb-12" />
      {sections.map((section, i) => (
        <div key={i} className={`border-gray border-opacity-50 border-b pb-10 ${i > 0 ? "pt-10" : ""}`}>
          <h4 className="mb-4 text-xl font-bold md:text-2xl">{section.title}</h4>

          <div
            className="text-black-main ml-2 max-w-none space-y-2"
            dangerouslySetInnerHTML={{ __html: section.contentHtml }}
          />
        </div>
      ))}
    </section>
  );
};

export default RoomHTMLPanel;
