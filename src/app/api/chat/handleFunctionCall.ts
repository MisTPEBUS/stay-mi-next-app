import { SearchHotelParams, UserRoomProductPlanApi } from "@/api/services/user/plan/roomProductPlan";
import { buildMultipleTripPlans, buildTripPlan } from "@/app/chat/components/tool/buildTripPlan";
import { northFunPlaces } from "@/app/chat/config";
import { AIResponse } from "@/lib/ai/sendChat";
import { getGeocode } from "@/utils/geoCoding";

import { fetchWeather } from "./fetchWeather";

export const handleFunctionCall = async (reply: AIResponse) => {
  if (reply.type !== "function_call") return;

  const { name, arguments: args } = reply.function;
  let location = String(args.location);

  const { lat, lng } = await getGeocode(location);

  if (name === "plan_trip") {
    const startDate = String(args.start_date);
    const endDate = String(args.end_date);
    const interest = Array.isArray(args.interest) ? args.interest.map(String) : [];
    const params: SearchHotelParams = {
      perPage: 100,
    };

    const [weather, roomProductPlan] = await Promise.all([
      fetchWeather(lat, lng, startDate, endDate),
      UserRoomProductPlanApi.getAllHotelRoomProduct(params),
    ]);
    console.log("天氣資料：", weather);
    console.log("房間產品計畫：", roomProductPlan);
    const tripPlan = buildMultipleTripPlans(
      lat,
      lng,
      northFunPlaces,
      roomProductPlan.roomPlansData,
      weather.forecast.forecastday,
      startDate,
      endDate,
      interest
    );

    return tripPlan;
  }
};
