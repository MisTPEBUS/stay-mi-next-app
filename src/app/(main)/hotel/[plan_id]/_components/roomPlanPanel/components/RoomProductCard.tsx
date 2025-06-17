import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type RoomProductCardProps = {
  imageUrl: string;
  title: string;
  facilities: string[];
  bedInfo: string;
  capacity: string;
  size: string;
  note?: string;
  originalPrice: number;
  salePrice: number;
  plan_id: string;
};

const RoomProductCard = ({
  imageUrl,
  plan_id,
  title,
  facilities,
  bedInfo,
  capacity,
  size,
  note,
  originalPrice,
  salePrice,
}: RoomProductCardProps) => {
  const router = useRouter();
  return (
    <div className="bg-white-pure flex flex-col gap-6 rounded-3xl p-6 shadow-sm md:flex-row">
      <div className="relative h-[208px] w-full overflow-hidden rounded-3xl md:w-[200px] md:flex-shrink-0">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-4">
        <h4 className="font-bold text-black">{title}</h4>

        <div className="text-muted-foreground flex flex-wrap items-center gap-2 text-sm">
          {facilities.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>

        <div className="flex justify-between gap-2">
          <div>
            <div className="rounded-md px-2 py-1">床型：{bedInfo}</div>
            <div className="rounded-md px-2 py-1">入住人數：{capacity}</div>
            <div className="rounded-md px-2 py-1">面積：{size}</div>
            <div className="rounded-md px-2 py-1">備註：{note || "-"}</div>
          </div>
          <div className="flow items-end gap-2 md:flex-row md:justify-end">
            <div className="gap-2 text-end">
              <p className="text-muted-foreground line-through">原價 ${originalPrice.toLocaleString()}</p>
              <p className="text-primary text-2xl font-bold">訂房價 ${salePrice.toLocaleString()}</p>
            </div>
            <Button
              className="bg-primary hover:bg-primary/90 mt-4 w-full rounded-xl px-6 py-2 text-white"
              onClick={() => {
                router.push(`${plan_id}`);
              }}
            >
              立即訂房 →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomProductCard;
