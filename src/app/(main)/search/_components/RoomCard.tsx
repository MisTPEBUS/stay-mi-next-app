import { BedDouble, MapPinned } from "lucide-react";
import React from "react";

const RoomCard = () => {
  return (
    <div className="bg-white-pure flex gap-6 rounded-2xl p-6">
      <div className="bg-gray size-32"></div>
      <div className="flex w-full justify-between">
        <div>
          <div className="mb-4 text-2xl font-bold">飯店名稱</div>
          <div className="flex items-center gap-2">
            <BedDouble />
            標準雙人房
          </div>
          <div className="flex items-center gap-2">
            <MapPinned />
            <div>台中西屯區</div>
          </div>
        </div>
        <div>
          <div className="text-gray-cap font-bold">原價: $2,300</div>
          <div className="text-primary text-xl font-bold">訂閱價: $1,780</div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
