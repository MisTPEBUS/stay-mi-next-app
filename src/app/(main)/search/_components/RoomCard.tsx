import { BedDouble, MapPinned } from "lucide-react";
import React from "react";

const RoomCard = () => {
  return (
    <div className="bg-white-pure flex flex-col gap-6 rounded-2xl p-6 md:flex-row">
      <div className="bg-gray size-32"></div>
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div>
          <div className="mb-4 text-2xl font-bold">飯店名稱</div>
          <div className="text-black-main flex items-center gap-1">
            <BedDouble className="m-1 size-5" />
            標準雙人房
          </div>
          <div className="text-black-main flex items-center gap-1">
            <MapPinned className="m-1 size-5" />
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
