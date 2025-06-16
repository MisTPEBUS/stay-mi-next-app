import React, { useState } from "react";

import { Slider } from "@/components/ui/slider";

import FilterSection from "./FilterSection";

const filterSections = [
  {
    title: "房內服務",
    options: ["含早餐", "Wifi"],
  },
  {
    title: "物業類型",
    options: ["民宿和旅館", "飯店", "青年旅社", "汽車旅館", "度假村"],
  },
  { title: "飯店設施", options: ["健身房", "游泳池", "免費停車場"] },
  { title: "旅客評等", options: ["2 星以上", "3 星以上", "4 星以上", "5 星"] },
  { title: "飯店風格", options: ["經濟實惠", "中等價位", "豪華", "適合全家"] },
];

const FilterOptionsPanel = () => {
  const [range, setRange] = useState([1000, 8000]);

  return (
    <div>
      {filterSections.map((section) => (
        <FilterSection key={section.title} title={section.title} options={section.options} />
      ))}
      <div className="flex flex-col p-6">
        <p className="mb-5 font-bold">每晚預算</p>
        <div className="mb-7 font-bold">
          NT ${range[0]} ~ NT ${range[1]}
          {range[1] === 8000 && "+"}
        </div>
        <Slider min={1000} max={8000} step={100} value={range} onValueChange={setRange} />
      </div>
    </div>
  );
};

export default FilterOptionsPanel;
