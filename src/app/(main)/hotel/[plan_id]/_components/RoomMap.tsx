import React from "react";

import SectionTitle from "@/app/(main)/(home)/SectionTitle";
import { SectionTitleContent } from "@/app/(main)/(home)/types";
import MyGoogleMap from "@/components/myGoogleMap";

type RoomMapProps = {
  transportationHtml: string;
  mapInfo: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
};
const title: SectionTitleContent = {
  heading: "交通方式",
  label: "Transportation",
};
const RoomMap = ({ transportationHtml, mapInfo }: RoomMapProps) => {
  return (
    <section className="border-gray border-opacity-50 border-b bg-white pb-10">
      <SectionTitle content={title} className="mb-8 md:mb-12" />
      <div className="mb-4 max-w-none space-y-2" dangerouslySetInnerHTML={{ __html: transportationHtml }} />
      <div className="overflow-hidden rounded-xl border shadow-sm">
        <MyGoogleMap name={mapInfo.name} address={mapInfo.address} lat={mapInfo.lat} lng={mapInfo.lng} />
      </div>
    </section>
  );
};

export default RoomMap;
