import React from "react";

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

const RoomMap = ({ transportationHtml, mapInfo }: RoomMapProps) => {
  return (
    <section className="gap-4 space-y-2 rounded-xl bg-white">
      <h3>交通方式</h3>
      <div className="max-w-none space-y-2" dangerouslySetInnerHTML={{ __html: transportationHtml }} />
      <div className="overflow-hidden rounded-xl border shadow-sm">
        <MyGoogleMap name={mapInfo.name} address={mapInfo.address} lat={mapInfo.lat} lng={mapInfo.lng} />
      </div>
    </section>
  );
};

export default RoomMap;
