import { Sun, Cloud, CloudRain } from "lucide-react";

const WeatherIcon = ({ type }: { type: "sun" | "cloud" | "rain" }) => {
  switch (type) {
    case "sun":
      return <Sun className="h-5 w-5 text-yellow-500" />;
    case "cloud":
      return <Cloud className="h-5 w-5 text-gray-400" />;
    case "rain":
      return <CloudRain className="h-5 w-5 text-blue-500" />;
  }
};

export default WeatherIcon;
