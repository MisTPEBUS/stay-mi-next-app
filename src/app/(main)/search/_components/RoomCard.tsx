import { motion } from "framer-motion";
import { BedDouble, MapPinned } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type RoomCardProps = {
  hotelName: string;
  roomType: string;
  region: string;
  originalPrice: number;
  subscriptionPrice: number;
  image?: string;
  planId: string;
};

const RoomCard = ({ planId, hotelName, roomType, region, originalPrice, subscriptionPrice, image }: RoomCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/hotel/${planId}`);
  };
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer"
      onClick={handleClick}
    >
      <div className="bg-white-pure flex flex-col gap-4 rounded-2xl p-4 md:flex-row md:gap-6 md:p-6">
        <div className="bg-gray relative aspect-3/2 w-full shrink-0 overflow-hidden rounded-lg md:aspect-square md:w-40">
          {image ? <Image alt={hotelName} src={image} fill className="object-cover" /> : null}
        </div>
        <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
          <div className="w-full flex-1">
            <div className="mb-2 text-xl font-bold md:mb-4 md:text-2xl">{hotelName}</div>
            <div className="text-black-main flex items-center gap-1">
              <BedDouble className="m-1 size-5" />
              {roomType}
            </div>
            <div className="text-black-main flex items-center gap-1">
              <MapPinned className="m-1 size-5" />
              <div>{region}</div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="text-gray-cap font-bold">原價: ${originalPrice.toLocaleString()}</div>
            <div className="text-primary text-xl font-bold">訂閱價: ${subscriptionPrice.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
