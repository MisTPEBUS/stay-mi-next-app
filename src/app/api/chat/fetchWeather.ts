import axios from "axios";

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export type WeatherForecast = {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        daily_chance_of_rain: number;
      };
    }[];
  };
};

export const fetchWeather = async (
  lat: number,
  lng: number,
  startDate: string,
  endDate: string
): Promise<WeatherForecast> => {
  try {
    const res = await axios.get<WeatherForecast>(`${BASE_URL}/forecast.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: `${lat},${lng}`,
        days: 14,
        aqi: "no",
        alerts: "no",
      },
    });

    const data = res.data;

    // 篩選
    const filtered = data.forecast.forecastday.filter((day) => {
      return day.date >= startDate && day.date <= endDate;
    });

    const filteredForecast: WeatherForecast = {
      ...data,
      forecast: {
        forecastday: filtered,
      },
    };

    console.log("Weather API Response :", filteredForecast);
    return filteredForecast;
  } catch (error) {
    console.error(" Weather API 失敗:", error);
    throw new Error("無法取得天氣資料，請稍後再試");
  }
};
