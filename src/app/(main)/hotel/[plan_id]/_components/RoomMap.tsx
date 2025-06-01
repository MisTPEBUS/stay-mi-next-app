import { Bus, Car, TrainFront } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const RoomImage = () => {
  return (
    //<section className="space-y-8 rounded-xl bg-[#fff9f2] px-6 py-12"></section>;

    <section className="grid grid-cols-2 gap-4 rounded-xl bg-white">
      <h2 className="text-2xl font-bold">交通方式</h2>

      <div className="space-y-6 text-base text-gray-800">
        {/* HTML */}
        <div className="flex items-start gap-2">
          <TrainFront className="mt-1 text-gray-600" />
          <p>從「台北車站 M1 出口」出站後，沿館前路直行，約步行 6 分鐘即可抵達本飯店。</p>
        </div>

        <div className="flex items-start gap-2">
          <Car className="mt-1 text-gray-600" />
          <p>飯店備有地下停車場，提供住客免費停車；部分區域為付費制，請事先預約。</p>
        </div>

        <div className="flex items-start gap-2">
          <Bus className="mt-1 text-gray-600" />
          <p>
            若您從其他區域搭車，可先搭乘捷運至台北車站或西門站，再轉乘公車至「忠孝西路口站」，下車後步行約 3
            分鐘即可抵達本飯店，交通便利。
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border shadow-sm"></div>
    </section>
  );
};

export default RoomImage;
