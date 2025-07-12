import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

import { Place } from "../../config";

import { filterPlacesByWeatherAndInterest, WeatherForecastDay } from "./filterPlacesByWeatherAndInterest";
import { pickHotelNear } from "./pickHotelNear";
import { pickNearestPlaces, pickNearestPlacesDiverse } from "./pickNearestPlaces";

export function buildTripPlan(
  userLat: number,
  userLng: number,
  places: Place[],
  hotels: RoomPlanProductType[],
  weatherData: WeatherForecastDay[],
  startDate: string,
  endDate: string,
  interests: string[]
): TripPlanDay[] {
  const days = weatherData.length;
  const result: TripPlanDay[] = [];
  let remainingPlaces = [...places];
  const alreadySelected = new Set<string>();
  const alreadySelectedHotelIds = new Set<string>();
  console.log(userLat, userLng, places.length, hotels.length, weatherData.length, startDate, endDate, interests);
  for (let i = 0; i < days; i++) {
    const weather = weatherData[i];

    // 根據天氣與興趣過濾景點
    const filtered = filterPlacesByWeatherAndInterest(remainingPlaces, weather).filter(
      (p) => !alreadySelected.has(p.id)
    );
    // 選出最接近使用者的景點
    //const selected = pickNearestPlaces(filtered, { lat: userLat, lng: userLng }, 3);
    const selected = pickNearestPlacesDiverse(filtered, { lat: userLat, lng: userLng }, 3);
    /*  if (selected.length === 0) continue; */
    // 避免重複
    selected.forEach((p) => alreadySelected.add(p.id));

    remainingPlaces = remainingPlaces.filter((p) => !alreadySelected.has(p.id));

    // 選擇最近的飯店
    const refLat = selected[0]?.location.lat ?? userLat;
    const refLng = selected[0]?.location.lng ?? userLng;
    const hotelsNear = pickHotelNear(refLat, refLng, hotels);

    const uniqueHotels = hotelsNear.filter((h) => !alreadySelectedHotelIds.has(h.hotel_id));
    /*   if (uniqueHotels.length === 0) continue; */

    uniqueHotels.forEach((h) => alreadySelectedHotelIds.add(h.hotel_id));

    result.push({
      date: weather.date,
      weather: weather.day.condition.text,
      weatherData: weather,
      places: selected,
      hotels: uniqueHotels,
    });
  }

  return result;
}

export type TripPlanDay = {
  date: string;
  weather: string;
  weatherData: WeatherForecastDay;
  places: Place[];
  hotels: RoomPlanProductType[];
};

export type TripPlanGroup = {
  id: string;
  title: string;
  days: TripPlanDay[];
};
export function buildMultipleTripPlans(
  userLat: number,
  userLng: number,
  places: Place[],
  hotels: RoomPlanProductType[],
  weatherData: WeatherForecastDay[],
  startDate: string,
  endDate: string,
  interests: string[],
  maxPlans: number = 3
): TripPlanGroup[] {
  const plans: TripPlanGroup[] = [];

  for (let i = 0; i < maxPlans; i++) {
    const shuffledPlaces = [...places].sort(() => 0.5 - Math.random());
    const days = buildTripPlan(userLat, userLng, shuffledPlaces, hotels, weatherData, startDate, endDate, interests);

    plans.push({
      id: `plan-${i + 1}`,
      title: `方案 ${i + 1}`,
      days,
    });
  }

  return plans;
}
