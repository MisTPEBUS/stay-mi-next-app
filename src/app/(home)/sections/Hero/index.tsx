"use client";
import React from "react";

import HeroSearchBar from "./_components";

const Hero = () => {
  return (
    <section className="bg-gray-cap -mt-30 flex min-h-screen items-center">
      <div className="container mx-auto overflow-hidden px-6 md:px-0">
        <div className="text-secondary-300 mb-12">
          <p className="mb-2 text-5xl font-bold md:mb-4 md:text-[120px]">
            開始
            <br />
            你的旅程
          </p>
          <p className="text-2xl font-bold md:text-[32px]">從這裡出發，找到最適合的住宿</p>
        </div>
        <HeroSearchBar />
      </div>
    </section>
  );
};

export default Hero;
