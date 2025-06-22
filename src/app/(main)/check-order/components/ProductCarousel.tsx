import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { MotionImage } from "../../hotel/[plan_id]/_components/productPanel/components/MotionImage";
import { GiftItem, SelectedGift } from "../types";

type ProductCarouselProps = {
  giftItems: GiftItem[];
  selectedGift: SelectedGift | null;
  handleSelectGift: (gift: GiftItem) => void;
  handleGiftQuantityChange: (type: "increase" | "decrease") => void;
};

/** 伴手禮輪播組件 - 展示可選擇的伴手禮商品 */
export const ProductCarousel = ({
  giftItems,
  selectedGift,
  handleSelectGift,
  handleGiftQuantityChange,
}: ProductCarouselProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="col-span-1 mt-8 lg:col-span-2"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            伴手禮選購
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {giftItems.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <motion.div
                    whileHover={{ scale: 1 }}
                    className={`h-full ${selectedGift?.item.id === item.id ? "border-primary border-2" : ""} overflow-hidden rounded-lg`}
                  >
                    <Card
                      className="flex h-full cursor-pointer flex-col overflow-hidden py-0"
                      onClick={() => handleSelectGift(item)}
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                        <MotionImage
                          src={item.image || ""}
                          alt={`${item.name} 圖片`}
                          wrapperClassName="h-full w-full"
                          imgClassName="h-full w-full object-cover transition-transform duration-300"
                          sizes="(max-width: 306px) 100vw"
                          priority
                          whileHover={{ scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 1,
                          }}
                        />
                      </div>
                      {/*   <Image
                        src={item.image || ""}
                        alt={item.name}
                        width={400} // 或實際顯示寬度
                        height={160} // 或實際顯示高度
                        className="h-40 w-full object-cover"
                      /> */}
                      <CardContent className="flex flex-grow flex-col justify-between p-4">
                        <div>
                          <h3 className="mb-1 text-lg font-semibold">{item.name}</h3>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-primary text-xl font-bold">${item.price}</span>
                          {selectedGift?.item.id === item.id ? (
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleGiftQuantityChange("decrease");
                                }}
                                disabled={selectedGift.quantity <= 1}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="font-medium">{selectedGift.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleGiftQuantityChange("increase");
                                }}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectGift(item);
                              }}
                              disabled={selectedGift !== null && selectedGift.item.id !== item.id}
                            >
                              {selectedGift !== null && selectedGift.item.id !== item.id ? "已選其他商品" : "加入訂單"}
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </CardContent>
      </Card>
    </motion.div>
  );
};
