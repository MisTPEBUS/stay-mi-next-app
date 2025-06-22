import { Calendar, MapPin, Phone } from "lucide-react";
import React from "react";

import { Card } from "@/components/ui/card";
import { formatCurrency, formatDate } from "@/utils/format";

import { HotelBooking } from "../type";

type HotelBookingCardProps = {
  booking: HotelBooking;
};

export const HotelBookingCard = ({ booking }: HotelBookingCardProps) => {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <MapPin className="text-primary h-5 w-5" />
        <h2 className="text-xl font-semibold">飯店訂房資訊</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <div>
            <h3 className="text-foreground font-medium">{booking.hotelName}</h3>
            <p className="text-muted-foreground text-sm">{booking.region}</p>
            <p className="text-muted-foreground text-sm">{booking.address}</p>
          </div>

          <div>
            <p className="text-sm font-medium">房型</p>
            <p className="text-muted-foreground text-sm">{booking.roomType}</p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="text-muted-foreground h-4 w-4" />
            <div>
              <p className="text-sm font-medium">飯店電話</p>
              <p className="text-muted-foreground text-sm">{booking.phone}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground h-4 w-4" />
            <div>
              <p className="text-sm font-medium">入住日期</p>
              <p className="text-muted-foreground text-sm">{formatDate(booking.checkIn)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground h-4 w-4" />
            <div>
              <p className="text-sm font-medium">退房日期</p>
              <p className="text-muted-foreground text-sm">{formatDate(booking.checkOut)}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">住宿天數</p>
            <p className="text-muted-foreground text-sm">{booking.nights} 晚</p>
          </div>

          <div className="pt-2">
            <p className="text-right text-lg font-semibold">{formatCurrency(booking.price)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
