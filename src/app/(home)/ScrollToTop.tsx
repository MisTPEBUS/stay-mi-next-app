"use client";
import React from "react";

import IconArrowLeft from "@/components/Icons/IconArrowLeft";

const ScrollToTop = () => {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={ScrollToTop}
      className="mx-auto flex w-fit cursor-pointer flex-col items-center gap-2 py-6 font-bold uppercase"
    >
      <IconArrowLeft className="size-6 rotate-90" />
      BACK TO TOP
    </div>
  );
};

export default ScrollToTop;
