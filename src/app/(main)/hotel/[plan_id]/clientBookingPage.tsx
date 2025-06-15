"use client";

import { useRouter } from "next/navigation"; // ✅ 修正：應使用 App Router 的 router
import React from "react";

import { Button } from "@/components/ui/button";
import { hotelFacilities, roomServices } from "@/config/settings";
import { useRoomPlanProductQuery } from "@/hooks/react-query/useRoomPlanProduct";
import { useOrderStore } from "@/store/useOrderStore";

import IconLabelPanel from "./_components/IconLabelPanel";
import PanelTemp from "./_components/PanelTemp";
import RoomHTMLPanel from "./_components/RoomHTMLPanel";
import RoomHeader from "./_components/RoomHeader";
import RoomMap from "./_components/RoomMap";

type ClientBookingPageProps = {
  planId: string;
};

const ClientBookingPage = ({ planId }: ClientBookingPageProps) => {
  const router = useRouter(); // ✅ 使用 App Router 的 router
  const { data } = useRoomPlanProductQuery(planId);

  const handleClick = () => {
    if (!data) return;

    useOrderStore.getState().setOrder({
      ...data,
    });

    router.push("/check-order");
  };

  if (!data) return <div>找不到資料</div>;

  return (
    <section>
      <div className="container mx-auto flex flex-col space-y-6 px-6 md:my-10 md:space-y-10 md:px-0">
        <RoomHeader
          Info={{
            hotel_name: data.hotel_name ?? "未知飯店",
            room_name: data.room_type_name ?? "未知房型",
            address: data.hotel_address ?? "未知地址",
            hotel_id: data.hotel_id ?? "",
          }}
        />
        <RoomHTMLPanel html={data.hotel_room_description} />
        <IconLabelPanel title="飯店設施" fields={data.hotel_facilities} config={hotelFacilities} />
        <IconLabelPanel title="房內服務" fields={data.room_services} config={roomServices} />
        <RoomMap
          transportationHtml={data.transportation}
          mapInfo={{
            name: data.hotel_name,
            address: data.hotel_address,
            lat: parseFloat(data.latitude),
            lng: parseFloat(data.longitude),
          }}
        />
        <PanelTemp title="而外房型清單" />
        <PanelTemp title="伴手禮清單" />
        <PanelTemp title="評論" />
        <RoomHTMLPanel html={data.hotel_policies} />
        <Button onClick={handleClick}>送出訂單</Button>
      </div>
    </section>
  );
};

export default ClientBookingPage;
