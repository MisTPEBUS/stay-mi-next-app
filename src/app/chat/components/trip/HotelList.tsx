import { TripHotel } from "./type";

const HotelList = ({ hotels }: { hotels: TripHotel[] }) => (
  <div className="mt-4">
    <h3 className="mb-2 font-semibold">推薦飯店</h3>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="flex gap-4 rounded border p-2">
          <img src={hotel.image} alt={hotel.name} className="h-20 w-20 rounded object-cover" />
          <div>
            <p className="font-medium">{hotel.name}</p>
            <p className="text-sm text-gray-500">
              ⭐ {hotel.rating}・{hotel.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HotelList;
