import React from "react";

import { CopyAddress } from "./CopyAddress";

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
      <div className="mt-6 flex flex-col space-y-2 md:block">
        <h1 className="font-bold text-black">
          {Info.room_name} | {Info.hotel_name}
        </h1>

        <div className="text-black-main flex items-center text-2xl">
          <span>{Info.address}</span>
          <CopyAddress address={Info.address ?? ""} className="ml-2"></CopyAddress>
        </div>
      </div>
    </section>
  );
};

export default RoomHeader;
