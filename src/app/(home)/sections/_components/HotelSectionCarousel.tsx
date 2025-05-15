import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { sectionHotels } from "../../hotels";

import HotelCard from "./HotelCard";

const HotelSectionCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
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

    setTotalPages(Math.ceil(sectionHotels.length / slidesToScroll));
    updatePage();

    api.on("select", updatePage);
    return () => {
      api.off("select", updatePage);
    };
  }, [api, slidesToScroll]);

  return (
    <div className="">
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
          {sectionHotels.map((hotel, index) => (
            <CarouselItem
              key={index}
              className="basis-full border-0 md:basis-[calc(100%/2.2)] md:pl-6 lg:basis-[calc(100%/3.4)]"
            >
              <HotelCard {...hotel} />
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
  );
};

export default HotelSectionCarousel;
