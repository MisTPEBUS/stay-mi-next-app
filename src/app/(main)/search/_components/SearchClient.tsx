"use client";
import { Funnel } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRoomPlanProductQueryAll } from "@/hooks/react-query/front-end/useRoomPlanProduct";
import { useHotelSearchParams } from "@/hooks/useSearchParams";

import FilterSheet from "./FilterSheet";
import FilterSideBar from "./FilterSideBar";
import RoomCard from "./RoomCard";

const filterOptions = [
  { label: "推薦", value: "recommended" },
  { label: "最新", value: "latest" },
  { label: "價格低到高", value: "priceLow" },
  { label: "價格高到低", value: "priceHigh" },
];

const SearchClient = () => {
  const [filterType, setFilterType] = useState("recommended");
  const [open, setOpen] = useState(false);
  const searchParams = useHotelSearchParams();
  const { data } = useRoomPlanProductQueryAll(searchParams);
  const roomPlansData = data?.roomPlansData;
  return (
    <>
      <div className="flex h-60 items-center bg-[url('/kv.webp')] bg-cover"></div>
      <div className="container mx-auto flex flex-col gap-5 px-6 py-10 md:gap-10 md:px-0 md:py-20">
        <div className="flex gap-5">
          <FilterSideBar />
          <FilterSheet open={open} setOpen={setOpen} />
          <div className="flex w-full flex-col gap-8 md:gap-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <span className="text-2xl font-bold">找到{roomPlansData?.length ?? 0}筆房間</span>
              <div className="flex justify-between">
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
                <Button variant="outline" size="icon" onClick={() => setOpen(true)} className="md:hidden">
                  <Funnel className="size-6" />
                </Button>
              </div>
            </div>
            {roomPlansData?.length === 0 && (
              <div className="bg-white-pure flex w-full flex-col items-center gap-6 rounded-2xl py-30">
                <p className="text-xl font-bold">查無房源，換個條件再試</p>
                <Button variant="outline" className="w-fit rounded-[0.5rem]">
                  清空所有篩選條件
                </Button>
              </div>
            )}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {roomPlansData?.map((plan) => (
                <RoomCard
                  key={plan.room_plan_id}
                  planId={plan.room_plan_id}
                  hotelName={plan.hotel_name}
                  roomType={plan.room_type_name}
                  region={plan.hotel_region}
                  originalPrice={plan.base_price}
                  subscriptionPrice={plan.subscription_price}
                  image={plan.hotel_room_images?.[0]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchClient;
