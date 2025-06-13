"use client";
import React from "react";

type PolicySection = {
  title: string;
  contentHtml: string;
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

const RoomHTMLPanel = ({ html }: { html: string }) => {
  const sections = parseRoomHtml(html);

  return (
    <section className="gap-4 space-y-2 bg-white">
      {sections.map((section, i) => (
        <div key={i} className="border-gray border-b py-10">
          <h3 className="mb-4 font-bold">{section.title}</h3>
          <div
            className="text-black-main ml-2 max-w-none space-y-2"
            dangerouslySetInnerHTML={{ __html: section.contentHtml }}
          ></div>
        </div>
      ))}
    </section>
  );
};

export default RoomHTMLPanel;
