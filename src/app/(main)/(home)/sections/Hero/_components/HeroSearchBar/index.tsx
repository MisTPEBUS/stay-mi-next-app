import axios from "axios";
import { addDays } from "date-fns";
import { BedDouble, Hotel, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { DateRange } from "react-day-picker";

import { countryData, roomData } from "@/app/(main)/(home)/hotels";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import DatePickerWithRange from "./_component/DatePickerWithRange";

type HotelSuggestion = {
  id: string;
  brand_id: string;
  region: string;
  name: string;
  address: string;
  phone: string;
  transportation: string;
  hotel_policies: string;
  latitude: string;
  longitude: string;
  hotel_facilities: string[];
  image_url: string;
  is_active: boolean;
};

const HeroSearchBar = () => {
  const url = process.env.NEXT_PUBLIC_PUBLIC_URL;
  const [hotelInput, setHotelInput] = useState("");
  const [roomTypeInput, setRoomTypeInput] = useState("");
  const [regionInput, setRegionInput] = useState("");
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 3),
  });

  const [hotelSuggestions, setHotelSuggestions] = useState<HotelSuggestion[]>([]);
  const [hotelDropdownOpen, setHotelDropdownOpen] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(true);

  const router = useRouter();
  const fetchSuggestions = async (name: string) => {
    if (!name || typeof name !== "string") {
      setHotelSuggestions([]);
      return;
    }
    try {
      const res = await axios.post(`${url}/users/search/suggestion`, { name });
      console.log(res.data.data.hotels[0].name);
      setHotelSuggestions(res.data.data.hotels);
      setHotelDropdownOpen(true);
    } catch (error) {
      console.log("取得建議失敗", error);
      setHotelSuggestions([]);
      setHotelDropdownOpen(false);
    }
  };
  const handleHotelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUserTyping(true);
    setHotelInput(e.target.value);
  };

  const handleHotelInputSelect = (hotelName: string) => {
    setIsUserTyping(false);
    setHotelInput(hotelName);
    setHotelDropdownOpen(false);
  };

  const handleSearchHotelRoomPlan = () => {
    const query: Record<string, string> = {};
    if (hotelInput.trim()) query.hotel_name = hotelInput.trim();
    if (regionInput.trim()) query.region = regionInput.trim();
    if (roomTypeInput.trim()) query.room_type = roomTypeInput.trim();
    if (date?.from) query.start_date = date.from.toISOString().split("T")[0];
    if (date?.to) query.end_date = date.to.toISOString().split("T")[0];
    const queryString = new URLSearchParams(query).toString();
    router.push(`/users/search/hotel-plan?${queryString}`);
  };
  useEffect(() => {
    if (!isUserTyping) return;

    fetchSuggestions(hotelInput);
  }, [hotelInput]);

  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-4 font-bold md:flex-row">
      <div className="relative flex w-full items-center gap-2 p-5 md:w-1/5">
        <Hotel className="size-6" />
        <input
          type="text"
          placeholder="請輸入飯店名稱"
          className="w-full text-base text-black placeholder-black outline-none"
          value={hotelInput}
          onChange={handleHotelInputChange}
          onFocus={() => hotelSuggestions.length > 0 && setHotelDropdownOpen(true)}
        />
        {hotelDropdownOpen && hotelSuggestions.length > 0 && (
          <div className="absolute top-12 left-10 z-50 mt-1 h-30 w-full rounded-md border bg-white p-2 text-black shadow-md">
            {hotelSuggestions.map((hotel, index) => (
              <div
                key={index}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleHotelInputSelect(hotel.name);
                }}
              >
                {hotel.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full p-5 md:w-1/5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <MapPin className="size-6" />
            <input
              type="text"
              placeholder="請選擇地點"
              value={regionInput}
              className="w-full text-base placeholder-black outline-none"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {countryData.map((country, index) => (
              <DropdownMenuItem key={index} onSelect={() => setRegionInput(country.name)}>
                {country.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DatePickerWithRange className="w-full md:w-3/10" date={date} setDate={setDate} />
      <div className="w-full p-5 md:w-1/5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2">
            <BedDouble className="size-6" />
            <input
              type="text"
              placeholder="請選擇房型"
              className="w-full text-base placeholder-black outline-none"
              value={roomTypeInput}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {roomData.map((room, index) => (
              <DropdownMenuItem key={index} onSelect={() => setRoomTypeInput(room.name)}>
                {room.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex w-full items-center gap-2 md:w-1/10">
        <Button className="h-16 w-full rounded-lg" onClick={handleSearchHotelRoomPlan}>
          立即搜尋
        </Button>
      </div>
    </div>
  );
};

export default HeroSearchBar;
