import { motion } from "framer-motion";
import { BedDouble, MapPinned } from "lucide-react";
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
      <div className="bg-white-pure flex flex-col gap-6 rounded-2xl p-6 md:flex-row">
        <div className="bg-gray size-32 overflow-hidden rounded-lg">
          {image ? <img src={image} alt={hotelName} className="h-full w-full object-cover" /> : null}
        </div>
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div>
            <div className="mb-4 text-2xl font-bold">{hotelName}</div>
            <div className="text-black-main flex items-center gap-1">
              <BedDouble className="m-1 size-5" />
              {roomType}
            </div>
            <div className="text-black-main flex items-center gap-1">
              <MapPinned className="m-1 size-5" />
              <div>{region}</div>
            </div>
          </div>
          <div>
            <div className="text-gray-cap font-bold">原價: ${originalPrice.toLocaleString()}</div>
            <div className="text-primary text-xl font-bold">訂閱價: ${subscriptionPrice.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
