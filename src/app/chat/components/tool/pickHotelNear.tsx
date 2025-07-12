import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

import { getDistanceKm } from "./getDistanceKm";

export function pickHotelNear(
  referenceLat: number,
  referenceLng: number,

  hotels: RoomPlanProductType[],
  count: number = 3
): RoomPlanProductType[] {
  const uniqueHotelsMap = new Map<string, RoomPlanProductType>();
  for (const hotel of hotels) {
    if (!uniqueHotelsMap.has(hotel.hotel_id)) {
      uniqueHotelsMap.set(hotel.hotel_id, hotel);
    }
  }

  const uniqueHotels = Array.from(uniqueHotelsMap.values());

  // 排序 + 擷取前 N 家
  return uniqueHotels
    .map((hotel) => ({
      hotel,
      distance: getDistanceKm(referenceLat, referenceLng, Number(hotel.latitude), Number(hotel.longitude)),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map((item) => item.hotel);
}
