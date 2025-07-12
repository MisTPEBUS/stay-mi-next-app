import HotelList from "./HotelList";
import TripScheduleList from "./TripScheduleList";
import { TripPlanCard } from "./type";

type TripCardProps = {
  trip: TripPlanCard;
};

const TripCard = ({ trip }: TripCardProps) => (
  <div className="space-y-4 rounded-xl border p-4 shadow-md">
    <img src={trip.image} alt={trip.title} className="w-full rounded-lg object-cover" />
    <h2 className="text-xl font-bold">{trip.title}</h2>
    <p>{trip.description}</p>
    <div className="text-sm text-gray-500">
      {trip.days}天{trip.nights}夜・{trip.duration}・{trip.price}
    </div>
    <TripScheduleList schedule={trip.schedule} />
    <HotelList hotels={trip.hotels} />
  </div>
);

export default TripCard;
