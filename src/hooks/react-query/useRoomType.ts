import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { HotelRoomTypeApi } from "@/api/services/dashboard/hotel/hotelRoomType";
import { QuerySchemaType } from "@/schema/common/pagination";
import { roomTypes, roomTypesCreateType, roomTypesUpdateType } from "@/schema/dashboard/hotelRoomType.dto";

export const useHotelRoomTypesQuery = (params: QuerySchemaType) => {
  return useQuery({
    queryKey: ["hotel-room-types", params.currentPage, params.perPage],
    queryFn: async () => {
      const result = await HotelRoomTypeApi.getAllHotelRoomType(params);

      return (
        result ?? {
          roomTypes: [],
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
export const useHotelRoomTypeQuery = (id: string | undefined) => {
  return useQuery<roomTypes>({
    queryKey: ["hotel-room-type", id],
    queryFn: async () => await HotelRoomTypeApi.getHotelRoomType(id!),
    enabled: !!id,
  });
};

export const useRoomTypeOptions = () => {
  return useQuery({
    queryKey: ["hotel-room-options"],
    queryFn: async () => {
      const result = await HotelRoomTypeApi.getAllHotelRoomType({ currentPage: 1, perPage: 999 });
      return result.roomTypes.map((room) => ({
        label: room.name,
        value: room.id,
      }));
    },
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};

export const useCreateHotelRoomType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: roomTypesCreateType) => await HotelRoomTypeApi.createHotelRoomType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-room-types"] });
      toast.success(`飯店房型新增成功`);
    },
  });
};

export const useUpdateHotelRoomType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: roomTypesUpdateType }) =>
      HotelRoomTypeApi.updateHotelRoomType(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-room-types"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-room-type"] });
      toast.success(`飯店房型新增成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};

export const useDeleteHotelRoomType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await HotelRoomTypeApi.deleteHotelRoomType(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-room-types"] });
      toast.error(`飯店刪除成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};
