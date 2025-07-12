import { SearchHotelParams, UserRoomProductPlanApi } from "@/api/services/user/plan/roomProductPlan";
import { TripQueryParams } from "@/lib/ai/openai-functions";
import { getGeocode } from "@/utils/geoCoding";

import { fetchWeather } from "./fetchWeather";

export async function generateTripPlan(params: TripQueryParams) {
  //1. geoCoding取lat, lng
  //2. 天氣api
  //3. 取景點API
  //4. 取住宿API
  const hotelSearchParams = {
    start_date: params.start_date,
    end_date: params.end_date,
    keyWord: params.location,
    min_price: params.budget_range?.min ?? undefined,
    max_price: params.budget_range?.max ?? undefined,
    // 可加上其他條件如 room_service、sort_by 等
    page: 1,
    limit: 10,
    sort_by: "price",
    sort_order: "asc",
  } satisfies SearchHotelParams;

  const { lat, lng } = await getGeocode(params.location);
  console.log(lat, lng, "lat lng");
  // const weather = await fetchWeather(params.location, params.start_date);
  //const pois = await getPOIs(params.location, params.travel_theme);
  //const hotel = await UserRoomProductPlanApi.getAllHotelRoomProduct(hotelSearchParams);

  return {
    summary: `${params.location} 的 ${params.travel_theme ?? "綜合"} 主題旅程`,
    // weather,
    // hotel,
  };
}
