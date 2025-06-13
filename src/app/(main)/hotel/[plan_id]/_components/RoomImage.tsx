import { Image } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

type RoomImageProps = { hotel_id?: string };

const RoomImage = ({ hotel_id }: RoomImageProps) => {
  return (
    <section className="grid h-[480px] grid-cols-1 gap-2 rounded-xl bg-white md:grid-cols-2">
      <div className="bg-black-sub col-span-1 h-full rounded-lg"></div>
      <div className="col-span-1 grid h-full grid-rows-2 gap-2">
        <div className="bg-black-sub rounded-lg"></div>
        <div className="bg-black-sub relative rounded-lg">
          <div className="text-black-main absolute right-4 bottom-4 space-x-2">
            <Button variant={"outline"} className="rounded-md">
              <Image />
              顯示更多${hotel_id}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomImage;
