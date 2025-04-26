"use client";
import React from "react";

import HeroSeachBar from "./_components";

const Hero = () => {
  return (
    <section className="bg-gray-cap -mt-[120px] flex min-h-screen items-center">
      <div className="container mx-auto overflow-hidden px-6 md:px-0">
        <div className="text-secondary-300 mb-12">
          <h1 className="mb-2 text-[48px] md:mb-4 md:text-[120px]">
            開始
            <br />
            你的旅程
          </h1>
          <h2 className="text-[24px] md:text-[32px]">從這裡出發，找到最適合的住宿</h2>
        </div>
        <HeroSeachBar />
      </div>
    </section>
  );
};

export default Hero;
