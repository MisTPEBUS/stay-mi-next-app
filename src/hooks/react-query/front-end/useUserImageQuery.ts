import { useQuery } from "@tanstack/react-query";

import UserHotelImageApi from "@/api/services/user/plan/hotelImage";
import { ImageType } from "@/schema/dashboard/image.dto";

export const useHotelImagesQuery = (hotel_id: string | undefined) => {
  return useQuery<ImageType[]>({
    queryKey: ["hotel-images", hotel_id],
    queryFn: async () => {
      if (!hotel_id) return [];
      const res = await UserHotelImageApi.getAllHotelImages(hotel_id);
      const sortedImgs = res.images.sort((a, b) => a.position - b.position);
      return sortedImgs ?? [];
    },
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });
};
