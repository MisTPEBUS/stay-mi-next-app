// components/trip/ChatTripReply.tsx
"use client";

import { ArrowLeft, Calendar, Clock, Cloud, CloudRain, MapPin, Star, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import type { ChatTripReplyProps, TripPlanCard } from "./type";

const getWeatherIcon = (icon: "sun" | "cloud" | "rain") => {
  switch (icon) {
    case "sun":
      return <Sun className="h-4 w-4 text-yellow-500" />;
    case "cloud":
      return <Cloud className="h-4 w-4 text-gray-500" />;
    case "rain":
      return <CloudRain className="h-4 w-4 text-blue-500" />;
  }
};

const ChatTripReply = ({ trips }: ChatTripReplyProps) => {
  const [selectedTrip, setSelectedTrip] = useState<TripPlanCard | null>(null);
  const router = useRouter();
  if (!trips?.length) return null;

  if (selectedTrip) {
    return (
      <div className="mx-auto w-full max-w-2xl p-4">
        <div className="mb-4">
          <Button variant="ghost" size="sm" onClick={() => setSelectedTrip(null)} className="mb-2">
            <ArrowLeft className="mr-1 h-4 w-4" />
            返回行程列表
          </Button>

          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-4"
            style={{ backgroundImage: `url(${selectedTrip.image})` }}
          >
            <div className="absolute inset-0 rounded-lg bg-black/40"></div>
            <div className="relative z-10">
              <h2 className="mb-2 text-xl font-semibold text-white">{selectedTrip.title}</h2>
              <p className="text-base text-white/90">{selectedTrip.description}</p>
            </div>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <h3 className="font-semibold">行程規劃</h3>
          {selectedTrip.schedule.map((day) => (
            <Card key={day.day} className="p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge className="text-sm">第{day.day}天</Badge>
                  <h4 className="font-medium">{day.title}</h4>
                </div>
                <div className="flex items-center gap-2">
                  {getWeatherIcon(day.weatherIcon)}
                  <span className="text-muted-foreground">
                    {day.weather} {day.temperature}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {day.activities.map((activity, idx) => (
                  <div key={idx} className="bg-muted/30 flex gap-3 rounded-lg p-3">
                    <div className="w-12 text-center">
                      <Clock className="mx-auto mb-1 h-5 w-5" />
                      {activity.time}
                    </div>
                    <img src={activity.image} alt={activity.location} className="h-12 w-16 rounded object-cover" />
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <MapPin className="text-muted-foreground h-5 w-5" />
                        <span className="font-medium">{activity.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* 推薦飯店 */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold">推薦飯店</h3>
          <div className="space-y-2">
            {selectedTrip.hotels.map((hotel) => (
              <Card
                key={hotel.id}
                className="cursor-pointer p-3 transition-shadow hover:shadow-md"
                onClick={() => router.push(`/hotel/${hotel.id}`)}
              >
                <div className="flex gap-3">
                  <img src={hotel.image} alt={hotel.name} className="h-12 w-16 rounded object-cover" />
                  <div className="flex-1">
                    <div className="mb-1 flex items-start justify-between">
                      <h4 className="text-base font-medium">{hotel.name}</h4>
                      <Badge variant="outline" className="text-base">
                        {hotel.price}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < Math.floor(hotel.rating) ? "fill-current text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground ml-1 text-xs">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl p-4">
      {/*    <div className="mb-4">
        <div className="inline-block max-w-[80%] rounded-lg">
          <p className="text-muted-foreground mb-2 text-base">為您推薦以下旅遊行程：</p>
        </div>
      </div> */}

      <div className="space-y-3">
        {trips.map((trip) => (
          <Card
            key={trip.id}
            className="cursor-pointer overflow-hidden transition-shadow hover:shadow-md"
            onClick={() => setSelectedTrip(trip)}
          >
            <div className="flex items-center">
              <div className="h-24 w-32 flex-shrink-0">
                <img src={trip.image} alt={trip.title} className="h-full w-full object-cover" />
              </div>

              <div className="flex-1 p-3">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-foreground line-clamp-1 text-base font-semibold">{trip.title}</h3>
                  <Badge className="text-black-main ml-2 bg-white text-xs">{trip.price}/晚</Badge>
                </div>

                <p className="text-muted-foreground mb-2 line-clamp-2">{trip.description}</p>

                <div className="text-muted-foreground flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {trip.days}天{trip.nights}夜
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{trip.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChatTripReply;
