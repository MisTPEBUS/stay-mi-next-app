import React from "react";

import RoomFeature from "./_components/RoomFeature";
import RoomHeader from "./_components/RoomHeader";
import RoomMap from "./_components/RoomMap";

const page = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col px-6 md:gap-10 md:px-0">
        <RoomHeader />
        <RoomFeature />
        <RoomMap />
        {/* <RoomService />
      <RoomFacilities />
      <RoomTraffic />
      
      <RoomBookingButton /> */}
      </div>
    </section>
  );
};

export default page;
