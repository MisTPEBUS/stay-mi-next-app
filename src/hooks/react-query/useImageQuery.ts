import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import HotelImageApi from "@/api/services/dashboard/hotel/hotelImage";
import { QuerySchemaType } from "@/schema/common/pagination";
import { ImageCreateType, ImageType } from "@/schema/dashboard/image";

export const useHotelImagesQuery = (params: QuerySchemaType = { currentPage: 1, perPage: 100 }) => {
  return useQuery({
    queryKey: ["hotel-images"],
    queryFn: async () => {
      const result = await HotelImageApi.getAllHotelImages(params);

      return (
        result ?? {
          images: [],
          pagination: {
            currentPage: params.currentPage,
            perPage: params.perPage,
            totalPages: 0,
            totalItems: 0,
          },
        }
      );
    },
    retry: 2,
    staleTime: 1000 * 60 * 5,
  });
};
export const useHotelImageQuery = (id: string | undefined) => {
  return useQuery<ImageType>({
    queryKey: ["hotel-image", id],
    queryFn: async () => await HotelImageApi.getHotelImage(id!),
    enabled: !!id,
  });
};

export const useCreateHotelImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ImageCreateType) => await HotelImageApi.createHotelImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-images"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-image"] });
      toast.success(`飯店圖片新增成功`);
    },
  });
};

/* export const useUpdateHotelImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: HotelImageUpdateType }) => HotelImageApi.updateHotelImage(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-images"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-product"] });
      toast.error(`計畫更新成功`);
    },
    onError: (error) => {
      toast.error(`計畫刪除失敗：${String(error)}`);
    },
  });
}; */

export const useDeleteHotelImageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await HotelImageApi.deleteHotelImage(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-images"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-image"] });
      toast.error(`圖片刪除成功`);
    },
    onError: (error) => {
      toast.error(`圖片刪除失敗：${String(error)}`);
    },
  });
};
