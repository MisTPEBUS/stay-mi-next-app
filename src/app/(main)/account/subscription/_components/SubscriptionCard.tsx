import { EllipsisVertical, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SubscriptionCard = () => {
  return (
    <div className="relative">
      <div className="relative hidden aspect-4/1 w-full overflow-hidden rounded-2xl md:block">
        <Image alt="subscription_card_bg" src="/subscription_card.webp" fill className="object-cover" />
      </div>
      <div className="relative h-45 w-full overflow-hidden rounded-2xl md:hidden">
        <Image alt="subscription_card_bg" src="/subscription_card_s.webp" fill className="object-cover" />
      </div>
      <div className="absolute top-4 left-4 flex size-12 rounded-full bg-white">
        <Sparkles className="m-auto size-6" />
      </div>
      <div className="text-white-pure absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <p className="mb-4 text-2xl font-bold md:text-3xl">Staymi Plus</p>
        <p>
          訂閱方案到期日至 <span className="font-bold">2025/05/01</span>
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="absolute right-4 bottom-4 flex size-10 cursor-pointer rounded-full bg-white focus:ring-0 focus:outline-none focus-visible:ring-0 md:right-6 md:bottom-6">
          <EllipsisVertical className="m-auto size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="rounded-xl border-none">
          <DropdownMenuItem className="h-12 md:h-13">變更方案</DropdownMenuItem>
          <DropdownMenuItem className="h-12 md:h-13">取消訂閱</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SubscriptionCard;
