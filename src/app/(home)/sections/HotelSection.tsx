"use client";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import SectionTitle from "../SectionTitle";
import { HotelType, SectionTitleContent } from "../types";

const title: SectionTitleContent = {
  heading: "精選飯店",
  label: "Stays",
};

const hotels: HotelType[] = [
  {
    title: "晨曦旅居",
    room_type: "經典雙人房",
    region: "台北大安區",
    price: 3600,
    sub_price: 2880,
    stars: 4.7,
    imageUrl: "",
  },
  {
    title: "漣島慢旅",
    room_type: "海景陽台房",
    region: "花蓮壽豐",
    price: 4000,
    sub_price: 3100,
    stars: 4.2,
    imageUrl: "",
  },
  {
    title: "木光山宿",
    room_type: "溫泉家庭房",
    region: "南投埔里",
    price: 5200,
    sub_price: 4280,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
  {
    title: "巷隅行旅",
    room_type: "標準單人房",
    region: "台中西屯區",
    price: 2300,
    sub_price: 1780,
    stars: 4.6,
    imageUrl: "",
  },
];

const Section = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // set slides scroll by device width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToScroll(1);
      } else if (width < 1024) {
        setSlidesToScroll(2);
      } else {
        setSlidesToScroll(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    const updatePage = () => {
      const snapIndex = api.selectedScrollSnap();
      setCurrentPage(snapIndex + 1);
    };

    setTotalPages(Math.ceil(hotels.length / slidesToScroll));
    updatePage();

    api.on("select", updatePage);
    return () => api.off("select", updatePage);
  }, [api, slidesToScroll]);

  return (
    <section className="container mx-auto grid gap-6 overflow-hidden px-6 py-16 md:grid-cols-4 md:px-0 md:py-40">
      <SectionTitle content={title} orientation="vertical" />
      <div className="col-span-3 w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: slidesToScroll,
          }}
          setApi={setApi}
          className="mb-12 overflow-visible"
        >
          <CarouselContent className="sm:-ml-6">
            {hotels.map((hotel, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-[calc(100%/2.2)] md:pl-6 lg:basis-[calc(100%/3.4)]"
              >
                <div key={index} className="flex flex-col">
                  <div className="bg-gray-cap mb-6 aspect-square h-70 rounded-3xl"></div>
                  <div className="flex flex-col gap-4">
                    <div className="text-black-main flex items-center justify-between">
                      <p className="text-2xl font-bold">{hotel.title}</p>
                      <div className="flex items-center">
                        <Star className="fill-black-main me-1 size-4" />
                        <span className="flex items-center text-base font-bold">{hotel.stars}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-black-sub ring-gray inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium ring-1">
                          房型
                        </span>
                        <p className="text-black-main">{hotel.room_type}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-black-sub ring-gray inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium ring-1">
                          地區
                        </span>
                        <p className="text-black-main">{hotel.region}</p>
                      </div>
                    </div>
                    <div className="price flex flex-col gap-2">
                      <p className="text-gray-cap font-bold">原價 ${hotel.price.toLocaleString()}</p>
                      <p className="text-primary text-xl font-bold">訂閱價 ${hotel.sub_price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="text-black-main flex items-center justify-start font-bold md:justify-between">
          <div className="hidden items-center gap-4 md:flex">
            <Button onClick={() => api?.scrollPrev()} variant="ghost" size="icon">
              <ArrowLeft />
            </Button>
            <span>{currentPage}</span>
            <span>/</span>
            <span>{totalPages}</span>
            <Button onClick={() => api?.scrollNext()} variant="ghost" size="icon">
              <ArrowRight />
            </Button>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">
              查看更多房間
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section;
