import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Card, CardTitle, CardContent } from "@/components/ui/card";

import { HotelType } from "../../types";

const HotelCard = ({ title, room_type, region, price, sub_price, stars, imageUrl }: HotelType) => {
  const displayPrice = (value: number | undefined) => (typeof value === "number" ? value.toLocaleString() : "-");

  return (
    <Card className="border-0 bg-white shadow-none">
      {imageUrl ? (
        <Image src="" alt={`${title} 圖片`} className="h-full w-full object-cover" />
      ) : (
        <div className="bg-gray-cap aspect-square h-70 rounded-3xl"></div>
      )}
      <div className="flex flex-col gap-4">
        <CardTitle className="text-black-main flex items-center justify-between">
          <p className="text-2xl font-bold">{title}</p>
          <div className="flex items-center">
            <Star className="fill-black-main me-1 size-4" />
            <span className="flex items-center text-base font-bold">{stars}</span>
          </div>
        </CardTitle>
        <CardContent className="flex flex-col gap-2 pl-[1px]">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-black-sub ring-gray inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium ring-1">
                房型
              </span>
              <p className="text-black-main">{room_type}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black-sub ring-gray inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium ring-1">
                地區
              </span>
              <p className="text-black-main">{region}</p>
            </div>
          </div>
          <div className="price flex flex-col gap-2">
            <p className="text-gray-cap font-bold">原價 ${displayPrice(price)}</p>
            <p className="text-primary text-xl font-bold">訂閱價 ${displayPrice(sub_price)}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default HotelCard;
