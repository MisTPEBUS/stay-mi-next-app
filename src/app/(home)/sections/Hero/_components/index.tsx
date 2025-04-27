import { BedDouble, CalendarDays, Hotel, MapPin } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const HeroSearchBar = () => {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-4 font-bold md:flex-row">
      <div className="flex w-full items-center gap-2 p-5 md:w-1/5">
        <Hotel className="size-6" />
        <input
          type="text"
          placeholder="請輸入飯店名稱"
          className="w-full text-base text-black placeholder-black outline-none"
        />
      </div>
      <div className="flex w-full items-center gap-2 p-5 md:w-1/5">
        <MapPin className="size-6" />
        <input type="text" placeholder="請選擇地點" className="w-full text-base placeholder-black outline-none" />
      </div>
      <div className="flex w-full items-center gap-2 p-5 md:w-3/10">
        <CalendarDays className="size-6" />
        <input
          type="text"
          placeholder="4 月 10 日（四）－ 4 月 5 日（五）"
          className="w-full text-base placeholder-black outline-none"
        />
      </div>
      <div className="flex w-full items-center gap-2 p-5 md:w-1/5">
        <BedDouble className="size-6" />
        <input type="text" placeholder="請選擇房型" className="w-full text-base placeholder-black outline-none" />
      </div>
      <div className="flex w-full items-center gap-2 md:w-1/10">
        <Button className="h-16 w-full rounded-lg">立即搜尋</Button>
      </div>
    </div>
  );
};

export default HeroSearchBar;
