"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { ProductCard, ProductCardProps } from "./ProductCard";

type ProductCarouselProps = {
  products: ProductCardProps[];
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-full">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
