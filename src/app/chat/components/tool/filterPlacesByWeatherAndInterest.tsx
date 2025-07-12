import { Place } from "../../config";

export function filterPlacesByWeatherAndInterest(places: Place[], weather: WeatherForecastDay): Place[] {
  const rainChance = weather.day.daily_chance_of_rain;
  const isRainy = rainChance >= 70;

  return places.filter((place) => {
    // 下雨時，排除戶外景點
    return !isRainy || !place.isOutdoor;
  });
}

export type WeatherForecastDay = {
  date: string;
  day: {
    condition: {
      text: string;
      icon: string;
    };
    daily_chance_of_rain: number;
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
  };
};
