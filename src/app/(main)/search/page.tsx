"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import FilterSideBar from "./_components/FilterSideBar";
import RoomCard from "./_components/RoomCard";

const filterOptions = [
  { label: "推薦", value: "recommended" },
  { label: "最新", value: "latest" },
  { label: "價格低到高", value: "priceLow" },
  { label: "價格高到低", value: "priceHigh" },
];

const Search = () => {
  const [filterType, setFilterType] = useState("recommended");
  return (
    <>
      <div className="flex h-60 items-center bg-[url('/kv.webp')] bg-cover"></div>
      <div className="container mx-auto flex flex-col gap-5 px-3 py-10 md:gap-10 md:px-0 md:py-20">
        <div className="flex gap-5">
          <FilterSideBar />
          <div className="flex w-full flex-col gap-10">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">台中：找到 1,227 筆房間</span>
              <div className="flex items-center gap-4">
                <div className="font-bold">排序方式</div>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-30">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.map((option) => (
                      <SelectItem key={option.label} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="bg-white-pure flex w-full flex-col items-center gap-6 rounded-2xl py-30">
              <p className="text-xl font-bold">查無房源，換個條件再試</p>
              <Button variant="outline" className="w-fit rounded-[0.5rem]">
                清空所有篩選條件
              </Button>
            </div>
            <RoomCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
