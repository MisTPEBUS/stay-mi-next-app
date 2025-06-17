"use client";

import { useRouter } from "next/navigation"; // ✅ 修正：應使用 App Router 的 router
import React from "react";

import { Button } from "@/components/ui/button";
import { hotelFacilities, roomServices } from "@/config/settings";
import { useRoomPlanProductQuery } from "@/hooks/react-query/front-end/useRoomPlanProduct";
import { useOrderStore } from "@/store/useOrderStore";

import BookingSearchBar from "./_components/BookingSearchBar";
import HotelInfo from "./_components/HotelInfo";
import IconLabelPanel from "./_components/IconLabelPanel";
import RoomHTMLPanel from "./_components/RoomHTMLPanel";
import RoomHeader from "./_components/RoomHeader";
import { RoomImage } from "./_components/RoomImage";
import RoomMap from "./_components/RoomMap";
import { StickyNav } from "./_components/StickyNav";
import ProductPanel from "./_components/productPanel/page";
import RoomPlanPanel from "./_components/roomPlanPanel/page";

type ClientBookingPageProps = {
  planId: string;
};

const ClientBookingPage = ({ planId }: ClientBookingPageProps) => {
  const router = useRouter();
  const { data } = useRoomPlanProductQuery(planId);
  if (!data) return;

  const handleClick = () => {
    useOrderStore.getState().setOrder({
      ...data,
    });

    router.push("/check-order");
  };

  if (!data) return <div>找不到資料</div>;

  return (
    <section>
      <div className="container mx-auto my-6 flex flex-col space-y-6 px-6 md:my-10 md:space-y-10 md:px-0">
        <div className="sticky top-0 z-40 bg-white shadow-sm">
          <BookingSearchBar />
        </div>

        <RoomImage hotelId={data.hotel_id} />

        <StickyNav price={data.subscription_price}></StickyNav>

        <div id="room" className="scroll-mt-28">
          <RoomHeader
            Info={{
              hotel_name: data.hotel_name ?? "未知飯店",
              room_name: data.room_type_name ?? "未知房型",
              address: data.hotel_address ?? "未知地址",
              hotel_id: data.hotel_id ?? "",
            }}
          />
          {/*  <ImageViewerDemo></ImageViewerDemo> */}
        </div>

        <RoomHTMLPanel html={data.hotel_room_description} isTitle={false} />
        <IconLabelPanel title="房內服務" fields={data.room_services} config={roomServices} />

        <div id="hotel" className="scroll-mt-28">
          <HotelInfo
            Info={{
              hotel_name: data.hotel_name,
              brand_description: data.brand_description,
              hotel_cover_image: data.hotel_cover_image,
            }}
          />
        </div>
        <IconLabelPanel title="飯店設施" fields={data.hotel_facilities} config={hotelFacilities} />

        <div id="other" className="scroll-mt-28">
          <RoomPlanPanel hotel_id={data.hotel_id} />
        </div>

        <div id="facility" className="scroll-mt-28">
          <ProductPanel hotel_id={data.hotel_id}></ProductPanel>
        </div>
        <div id="review" className="scroll-mt-28"></div>
        <div id="transport" className="scroll-mt-28">
          <RoomMap
            transportationHtml={data.transportation}
            mapInfo={{
              name: data.hotel_name,
              address: data.hotel_address,
              lat: parseFloat(data.latitude),
              lng: parseFloat(data.longitude),
            }}
          />
        </div>
        <div id="policy" className="scroll-mt-28">
          <RoomHTMLPanel html={data.hotel_policies} isTitle={true} />
        </div>
        <Button onClick={handleClick}>送出訂單</Button>
      </div>
    </section>
  );
};

export default ClientBookingPage;
