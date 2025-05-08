"use client";
import React from "react";

import HeroSearchBar from "./_components/HeroSearchBar";
const Hero = () => {
  return (
    <section className="-mt-14 flex h-screen items-center bg-[url('/kv.webp')] bg-cover md:-mt-20 md:bg-top">
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
