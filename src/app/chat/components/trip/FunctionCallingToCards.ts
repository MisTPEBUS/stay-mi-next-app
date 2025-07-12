import { format } from "date-fns";
import { number } from "zod";

import { Place } from "../../config";
import { TripPlanGroup } from "../tool/buildTripPlan";

import { TripHotel, TripPlanCard } from "./type";

export function transformTripPlansToCards(plans: TripPlanGroup[], defaultImage?: string): TripPlanCard[] {
  return plans.map((plan, index): TripPlanCard => {
    const days = plan.days.length;
    const nights = days > 1 ? days - 1 : 0;
    const firstDay = plan.days[0];
    const { hotels, places } = plan.days[index] || {};
    const defaultPlace = places?.[0] || {};
    const defaultHotel = hotels?.[0] || {};
    console.log("index", index);
    console.log("hotels", plan.days[index]);

    return {
      id: defaultPlace.id,
      title: defaultPlace.name || `行程 ${index + 1}`,
      description: defaultPlace.slogan || "這是一個精彩的旅遊行程，包含多個活動和景點。",
      image: defaultPlace.imageUrl || defaultImage || "https://via.placeholder.com/300",
      duration: `${days}天${nights}夜`,
      days,
      nights,
      location: defaultPlace.city || "未知地點",
      price: `NT$ ${defaultHotel.price}`,
      schedule: plan.days.map((day, index): TripPlanCard["schedule"][number] => ({
        day: index + 1,
        title: day.places[0].slogan || "行程活動",
        weather: simplifyWeather(day.weather),
        weatherIcon: mapWeatherToIconCategory(day.weather) /* day.weatherIcon */,
        temperature: String(day.weatherData?.day?.avgtemp_c),
        activities: generateDaySchedule(day.places),
      })),
      hotels: hotels?.map(
        (hotel): TripHotel => ({
          id: hotel.room_plan_id,
          name: hotel.hotel_name,
          rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
          price: `NT$ ${hotel.price ?? hotel.base_price ?? 0}`,
          image: hotel.hotel_cover_image ?? "",
        })
      ),
    };
  });
}

export function mapWeatherToIconCategory(weather: string): "sun" | "rain" | "cloud" {
  const text = weather.toLowerCase();

  if (text.includes("sun") || text.includes("clear")) return "sun";
  if (text.includes("rain") || text.includes("shower") || text.includes("drizzle") || text.includes("thunder"))
    return "rain";
  if (text.includes("cloud") || text.includes("overcast")) return "cloud";
  // 預設
  return "cloud";
}

export function simplifyWeather(weather: string): "晴天" | "多雲" | "雨天" {
  const text = weather.toLowerCase();

  if (text.includes("sun") || text.includes("clear")) return "晴天";
  if (text.includes("rain") || text.includes("shower") || text.includes("drizzle") || text.includes("thunder"))
    return "雨天";
  if (text.includes("cloud") || text.includes("overcast") || text.includes("fog")) return "多雲";

  // fallback 預設為多雲
  return "多雲";
}

function generateDaySchedule(places: Place[]): {
  time: string;
  location: string;
  description: string;
  image: string;
}[] {
  const schedule: {
    time: string;
    location: string;
    description: string;
    image: string;
  }[] = [];

  let currentHour = 10;
  let currentMinute = 0;

  for (const place of places) {
    const timeStr = `${String(currentHour).padStart(2, "0")}:${String(currentMinute).padStart(2, "0")}`;

    schedule.push({
      time: timeStr,
      location: place.name,
      description: place.description ?? "這是一個美麗的景點。",
      image: place.imageUrl ?? "https://images.unsplash.com/photo-1580414215542-2e1e607f2b6a?w=120&h=80&fit=crop",
    });

    // 時間累加
    const duration = place.duration ?? 1.5;
    const totalMinutes = Math.round(duration * 60);
    currentMinute += totalMinutes;

    // 進位到下一小時
    while (currentMinute >= 60) {
      currentMinute -= 60;
      currentHour += 1;
    }
  }

  return schedule;
}
