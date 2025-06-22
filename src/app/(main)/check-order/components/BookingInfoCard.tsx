import { motion } from "framer-motion";
import { Phone, MapPin, Calendar, DollarSign, Hotel, BedDouble, Users, Building2 } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BookingInfoCardProps } from "../types";

//訂房詳細資訊
export const BookingInfoCard = ({ bookingInfo, hotelBookingTotal }: BookingInfoCardProps) => {
  if (!bookingInfo) return null;
  console.log("bookingInfo", bookingInfo);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="flex"
    >
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hotel className="h-5 w-5" />
            訂房資訊
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="relative mb-3 h-40 w-full overflow-hidden rounded-md">
            <Image
              src={bookingInfo.hotel.image}
              alt={bookingInfo.hotel.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
              <h3 className="text-lg font-semibold">{bookingInfo.hotel.name}</h3>
              <p className="flex items-center gap-1 text-sm">
                <MapPin className="h-3 w-3" /> {bookingInfo.hotel.address}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Calendar className="text-muted-foreground h-4 w-4" />
              入住日期
            </span>
            <span>{new Date(bookingInfo.checkInDate).toLocaleDateString("zh-TW")}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Calendar className="text-muted-foreground h-4 w-4" />
              退房日期
            </span>
            <span>{new Date(bookingInfo.checkOutDate).toLocaleDateString("zh-TW")}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BedDouble className="text-muted-foreground h-4 w-4" />
              房型
            </span>
            <span>{bookingInfo.roomType}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Users className="text-muted-foreground h-4 w-4" />
              晚數
            </span>
            <span>{bookingInfo.nights} 晚</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <DollarSign className="text-muted-foreground h-4 w-4" />
              每晚價格
            </span>
            <span>${bookingInfo.hotel.pricePerNight}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Phone className="text-muted-foreground h-4 w-4" />
              飯店電話
            </span>
            <span>{bookingInfo.hotel.phone}</span>
          </div>
          <div className="flex items-center justify-between text-base font-semibold">
            <span className="flex items-center gap-2">
              <Building2 className="text-muted-foreground h-4 w-4" />
              訂房金額小計
            </span>
            <span>${hotelBookingTotal}</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
