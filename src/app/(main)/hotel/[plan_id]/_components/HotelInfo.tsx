import Image from "next/image";

type HotelInfoProps = {
  Info: {
    hotel_name: string;
    brand_description: string;
    hotel_cover_image: string;
  };
};

const HotelInfo = ({ Info }: HotelInfoProps) => {
  return (
    <section>
      <div className="md:fl grid grid-cols-1 gap-8 space-x-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 text-[28px] font-bold text-black md:text-[40px]">{Info.hotel_name}</h2>
          <p className="font-bold">靜謐・雅緻・極致款待</p>
          <p className="text-black-main mt-6 text-left leading-loose whitespace-pre-line">{Info.brand_description}</p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[636/358] w-full overflow-hidden rounded-xl">
            <Image src={Info.hotel_cover_image} alt={Info.hotel_name} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
