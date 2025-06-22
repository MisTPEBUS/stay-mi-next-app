"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { ImageViewerDemo } from "@/components/ImageDialog";
import { useHotelImagesQuery } from "@/hooks/react-query/front-end/useUserImageQuery";
import { useImageStore } from "@/store/useImageStore";

const ImagesPage = () => {
  const searchParams = useSearchParams();
  const hotelId = searchParams.get("hotel_id");

  const { data, isLoading, isError } = useHotelImagesQuery(hotelId ?? "");
  const imageUrls = (data ?? []).map((img) => img.image_url);
  useEffect(() => {
    // 可選：進入頁面時清除上一間飯店圖片
    return () => useImageStore.getState().clearImages();
  }, []);

  if (isLoading) return <div>圖片載入中...</div>;
  if (isError) return <div>圖片載入失敗，請稍後再試</div>;

  return (
    <section>
      <div className="container mx-auto flex flex-col space-y-6 px-6 md:space-y-10 md:px-0">
        <ImageViewerDemo images={imageUrls} />
      </div>
    </section>
  );
};

export default ImagesPage;
