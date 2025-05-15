"use client";
import React from "react";

import SectionTitle from "../SectionTitle";
import { SectionTitleContent } from "../types";

import HotelSectionCarousel from "./_components/HotelSectionCarousel";

const title: SectionTitleContent = {
  heading: "精選飯店",
  label: "Stays",
};

const HotelSection = () => {
  return (
    <section className="container mx-auto grid gap-6 overflow-hidden px-6 py-16 md:grid-cols-4 md:px-0 md:py-40">
      <SectionTitle content={title} orientation="vertical" />
      <div className="col-span-3 w-full overflow-hidden">
        <HotelSectionCarousel />
      </div>
    </section>
  );
};

export default HotelSection;
