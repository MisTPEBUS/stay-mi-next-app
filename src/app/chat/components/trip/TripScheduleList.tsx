import TripScheduleItem from "./TripScheduleItem";
import { TripDay } from "./type";

const TripScheduleList = ({ schedule }: { schedule: TripDay[] }) => (
  <div className="space-y-4">
    {schedule.map((item) => (
      <TripScheduleItem key={item.day} schedule={item} />
    ))}
  </div>
);

export default TripScheduleList;
