import TripActivityItem from "./TripActivityItem";
import WeatherIcon from "./WeatherIcon";
import { TripDay } from "./type";

const TripScheduleItem = ({ schedule }: { schedule: TripDay }) => (
  <div>
    <div className="flex items-center justify-between font-semibold">
      <span>
        Day {schedule.day}: {schedule.title}
      </span>
      <div className="flex items-center gap-2">
        <WeatherIcon type={schedule.weatherIcon} />
        <span>
          {schedule.weather} {schedule.temperature}
        </span>
      </div>
    </div>
    <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {schedule.activities.map((activity, index) => (
        <TripActivityItem key={index} activity={activity} />
      ))}
    </div>
  </div>
);

export default TripScheduleItem;
