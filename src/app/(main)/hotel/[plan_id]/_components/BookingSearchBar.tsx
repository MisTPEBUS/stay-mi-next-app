import { addDays } from "date-fns";
import { BedDouble, Hotel, MapPin } from "lucide-react";
import React, { useState } from "react";
import { DateRange } from "react-day-picker";

import DatePickerWithRange from "@/app/(main)/(home)/sections/Hero/_components/HeroSearchBar/_component/DatePickerWithRange";
import { Button } from "@/components/ui/button";

type BookingSearchBarProps = {
  onSearch: (data: { hotelName: string; location: string; roomType: string; date: DateRange | undefined }) => void;
};

const BookingSearchBar = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });
  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [roomType, setRoomType] = useState("");

  /*   const handleSearchClick = () => {
    onSearch({ hotelName, location, roomType, date });
  }; */

  return (
    <div className="bg-white-pure flex flex-col items-center rounded-xl p-2 font-bold md:flex-row">
      <div className="flex w-full items-center gap-2 p-5 md:w-1/5">
        <Hotel className="size-6" />
        <input
          type="text"
          placeholder="請輸入飯店名稱"
          className="w-full text-base text-black placeholder-black outline-none"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center gap-2 p-5 md:w-1/5">
        <MapPin className="size-6" />
        <input
          type="text"
          placeholder="請選擇地點"
          className="w-full text-base placeholder-black outline-none"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <DatePickerWithRange className="w-full md:w-3/10" date={date} setDate={setDate} />
      <div className="flex w-full items-center gap-2 p-5 md:w-1/5">
        <BedDouble className="size-6" />
        <input
          type="text"
          placeholder="請選擇房型"
          className="w-full text-base placeholder-black outline-none"
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
        />
      </div>
      <div className="flex w-full items-center gap-2 md:w-1/10">
        <Button className="h-16 w-full rounded-lg">立即搜尋</Button>
      </div>
    </div>
  );
};

export default BookingSearchBar;
