import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { Slider } from "@/components/ui/slider";
import { allHotelFacilityValues, allRoomServiceValues } from "@/config/settings";

import FilterSection from "./FilterSection";

const filterSections = [
  {
    title: "房內服務",
    name: "room_service",
    options: allRoomServiceValues,
  },
  {
    title: "物業類型",
    name: "property_type",
    options: ["民宿和旅館", "飯店", "青年旅社", "汽車旅館", "度假村"],
  },
  { title: "飯店設施", name: "hotel_facilities", options: allHotelFacilityValues },
  { title: "旅客評等", name: "hotel_rate", options: ["2 星以上", "3 星以上", "4 星以上", "5 星"] },
  { title: "飯店風格", name: "hotel_style", options: ["經濟實惠", "中等價位", "豪華", "適合全家"] },
];

const FilterOptionsPanel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [range, setRange] = useState([
    Number(searchParams.get("min_price") ?? 1000),
    Number(searchParams.get("max_price") ?? 8000),
  ]);

  const handleOptionChange = (name: string, values: string[]) => {
    const params = new URLSearchParams(searchParams);
    // 清除欄位所有值
    params.delete(name);
    values.forEach((val) => {
      params.append(name, val);
    });

    router.push(`?${params.toString()}`);
  };

  const handleRangeChange = (values: number[]) => {
    const [min, max] = values;
    const params = new URLSearchParams(searchParams);
    params.set("min_price", min.toString());

    if (max < 8000) {
      params.set("max_price", max.toString());
    }

    router.push(`?${params.toString()}`);
    setRange(values);
  };

  return (
    <div>
      {filterSections.map((section) => (
        <FilterSection
          key={section.name}
          title={section.title}
          name={section.name}
          options={section.options}
          values={searchParams.getAll(section.name)}
          onChange={handleOptionChange}
        />
      ))}
      <div className="flex flex-col p-6">
        <p className="mb-5 font-bold">每晚預算</p>
        <div className="mb-7 font-bold">
          NT ${range[0]} ~ NT ${range[1]}
          {range[1] === 8000 && "+"}
        </div>
        <Slider min={1000} max={8000} step={100} value={range} onValueChange={handleRangeChange} />
      </div>
    </div>
  );
};

export default FilterOptionsPanel;
