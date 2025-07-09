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

export const fetchWeather = async (city: string): Promise<WeatherForecast> => {
  try {
    const res = await axios.get<WeatherForecast>(`${BASE_URL}/forecast.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: city,
        days: 7,
        aqi: "no",
        alerts: "no",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Weather API 失敗:", error);
    throw new Error("無法取得天氣資料，請稍後再試");
  }
};
