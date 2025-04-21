import clsx from "clsx";
import React from "react";

import { SectionTitleProps } from "./types";

const SectionTitle = ({ content, orientation = "horizontal", className }: SectionTitleProps) => {
  const isVertical = orientation === "vertical";
  return (
    <div className={clsx(isVertical ? "items-start gap-6" : "flex-col gap-4", "flex", className)}>
      {isVertical ? (
        <>
          <p className="text-[40px] font-bold [letter-spacing:0.5rem] [writing-mode:vertical-rl]">{content.heading}</p>
          <div className="ml-4 flex origin-top-left rotate-90 items-center gap-2">
            <div className="bg-primary size-2 rounded-full"></div>
            <p className="text-2xl font-bold uppercase">{content.label}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <div className="bg-primary size-2 rounded-full"></div>
            <p className="text-2xl font-bold uppercase">{content.label}</p>
          </div>
          <p className="text-[40px] font-bold">{content.heading}</p>
        </>
      )}
    </div>
  );
};

export default SectionTitle;
