import { Eraser } from "lucide-react";
import React, { useState } from "react";

import { Slider } from "@/components/ui/slider";

import FilterCheckbox from "./FilterCheckbox";

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

const FilterSideBar = () => {
  const [range, setRange] = useState([1000, 8000]);
  return (
    <div className="bg-white-pure w-1/3 rounded-3xl">
      <div className="border-gray/50 flex items-center justify-between border-b px-6 py-8">
        <span className="text-xl font-bold">透過以下分類搜尋</span>
        <div className="flex items-center">
          <Eraser className="m-1 size-5" />
          清空條件
        </div>
      </div>
      <div>
        <div>
          {filterSections.map((section) => (
            <div key={section.title} className="border-gray/50 border-b p-6">
              <p className="mb-5 font-bold">{section.title}</p>
              <div className="space-y-4">
                {section.options.map((option) => (
                  <FilterCheckbox key={option} title={option} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col p-6">
          <p className="mb-5 font-bold">每晚預算</p>
          <div className="mb-7 font-bold">
            NT ${range[0]} ~ NT ${range[1]}
            {range[1] === 8000 && "+"}
          </div>
          <Slider min={1000} max={8000} step={100} value={range} onValueChange={setRange} />
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
