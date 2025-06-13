import { Copy } from "lucide-react";
import React from "react";

import RoomImage from "./RoomImage";

type RoomHeaderProps = {
  Info: {
    hotel_name: string;
    room_name: string;
    address: string;
    hotel_id: string;
  };
};

const RoomHeader = ({ Info }: RoomHeaderProps) => {
  return (
    <section className="rounded-xl">
      {/* 圖片區塊 */}
      <RoomImage />

      <div className="mt-6 flex space-y-2 md:block">
        <h1 className="font-bold text-black">
          {Info.room_name} <span className="text-black/70">| {Info.hotel_name}</span>
        </h1>

        <div className="text-muted-foreground flex items-center text-2xl">
          <span>{Info.address}</span>
          <Copy className="ml-1" />
        </div>
      </div>
    </section>
  );
};

export default RoomHeader;
