import router from "next/router";

import { Button } from "@/components/ui/button";
import { useHotelImagesQuery } from "@/hooks/react-query/front-end/useUserImageQuery";

import { MotionImage } from "./productPanel/components/MotionImage";

export const RoomImage = ({ hotelId }: { hotelId: string }) => {
  const { data = [], isLoading } = useHotelImagesQuery(hotelId);
  const topImages = data.slice(0, 3);
  const hasMore = data.length > 3;

  if (isLoading) return <div className="bg-muted h-[480px] rounded-xl" />;

  return (
    <section className="grid h-[480px] grid-cols-1 gap-1 bg-white md:grid-cols-2">
      <div className="relative col-span-1 h-full overflow-hidden rounded-l-3xl rounded-r-xl">
        {topImages[0] && (
          <MotionImage
            src={topImages[0].image_url}
            alt={`${topImages[0].image_url} 圖片`}
            wrapperClassName=""
            imgClassName=""
            sizes="(max-width: 280px) 100vw"
            priority
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 1,
            }}
          />
        )}
      </div>

      <div className="col-span-1 grid h-full grid-rows-2 gap-1">
        <div className="relative overflow-hidden rounded-xl rounded-tr-3xl">
          {topImages[1] && (
            <MotionImage
              src={topImages[1].image_url}
              alt={`${topImages[1].image_url} 圖片`}
              wrapperClassName=""
              imgClassName=""
              sizes="(max-width: 280px) 100vw"
              priority
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
            />
          )}
        </div>
        <div className="relative overflow-hidden rounded-xl rounded-br-3xl">
          {topImages[2] && (
            <MotionImage
              src={topImages[2].image_url}
              alt={`${topImages[2].image_url} 圖片`}
              wrapperClassName=""
              imgClassName=""
              sizes="(max-width: 280px) 100vw"
              priority
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1,
              }}
            />
          )}

          {hasMore && (
            <div className="absolute right-4 bottom-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  router.push(`/hotel/${hotelId}/images`);
                }}
              >
                顯示更多圖片
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
