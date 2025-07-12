import { TripDay } from "./type";

const TripActivityItem = ({ activity }: { activity: TripDay["activities"][number] }) => (
  <div className="flex gap-4">
    <img src={activity.image} alt={activity.location} className="h-24 w-24 rounded object-cover" />
    <div>
      <p className="font-medium">
        {activity.time} @ {activity.location}
      </p>
      <p className="text-sm text-gray-600">{activity.description}</p>
    </div>
  </div>
);

export default TripActivityItem;
