"use client";

import SectionTitle from "@/app/(main)/(home)/SectionTitle";
import { SectionTitleContent } from "@/app/(main)/(home)/types";
import { useRoomPlanProductQueryAll } from "@/hooks/react-query/front-end/useRoomPlanProduct";
import { useUserProductPlans } from "@/hooks/react-query/front-end/useUserProductPlans";

import RoomProductCard from "./components/RoomProductCard";

type ProductPanelProps = {
  hotel_id: string;
};
const title: SectionTitleContent = {
  heading: "房型精選",
  label: "ROOM",
};
const RoomPlanPanel = (params: ProductPanelProps) => {
  const { data } = useRoomPlanProductQueryAll({ hotel_id: params.hotel_id });
  console.log(params.hotel_id);
  console.log(data);
  if (!data) return;
  let { roomPlansData } = data;
  roomPlansData = roomPlansData.filter((room) => room.hotel_id === params.hotel_id);
  return (
    <section className="">
      <div className="mb-8 md:mb-12">
        <SectionTitle content={title} className="mb-4" />
      </div>
      <div className="space-y-6">
        {roomPlansData.map((room) => (
          <RoomProductCard
            key={room.room_plan_id}
            imageUrl={room.hotel_room_images[0]}
            title={room.room_type_name}
            facilities={["Wifi", "浴缸", "含早餐", "禁菸房"]}
            bedInfo={room.room_type_description?.includes("大床") ? "一大床" : "雙床"}
            capacity={"最多 2 人"}
            size={"約 10.8 平方公尺"}
            note={room.room_type_description?.replace(/<\/?[^>]+(>|$)/g, "") ?? ""}
            originalPrice={room.base_price}
            salePrice={room.price}
            plan_id={room.room_plan_id}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomPlanPanel;
