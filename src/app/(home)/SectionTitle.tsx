import React from "react";
import { twMerge } from "tailwind-merge";

import { SectionTitleProps } from "./types";

const SectionTitle = ({ content, orientation = "horizontal", className }: SectionTitleProps) => {
  const isVertical = orientation === "vertical";
  return (
    <>
      {isVertical && (
        <div className={twMerge("hidden items-start gap-6 md:flex", className)}>
          <p className="text-[40px] font-bold [letter-spacing:0.5rem] [writing-mode:vertical-rl]">{content.heading}</p>
          <div className="ml-4 flex origin-top-left rotate-90 items-center gap-2">
            <div className="bg-primary size-2 rounded-full"></div>
            <p className="text-2xl font-bold uppercase">{content.label}</p>
          </div>
        </div>
      )}
      <div className={twMerge(isVertical ? "md:hidden" : "flex flex-col gap-1 md:gap-4", className)}>
        <div className="flex items-center gap-2">
          <div className="bg-primary size-2 rounded-full"></div>
          <p className="text-base font-bold uppercase md:text-2xl">{content.label}</p>
        </div>
        <p className="text-2xl font-bold md:text-[40px]">{content.heading}</p>
      </div>
    </>
  );
};

export default SectionTitle;
