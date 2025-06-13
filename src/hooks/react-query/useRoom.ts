import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { HotelRoomApi } from "@/api/services/dashboard/hotel/hotelRoom";
import { QuerySchemaType } from "@/schema/common/pagination";
import { HotelRoomType, HotelRoomTypeCreateType, HotelRoomTypeUpdateType } from "@/schema/dashboard/hotelRoom.dto";

export const useHotelRoomsQuery = (params: QuerySchemaType) => {
  return useQuery({
    queryKey: ["hotel-rooms", params.currentPage, params.perPage],
    queryFn: async () => {
      const result = await HotelRoomApi.getAllHotelRoom(params);

      return (
        result ?? {
          hotelRooms: [],
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
export const useHotelRoomQuery = (id: string | undefined) => {
  return useQuery<HotelRoomType>({
    queryKey: ["hotel-room"],
    queryFn: async () => await HotelRoomApi.getHotelRoom(id!),
    enabled: !!id,
  });
};

export const useCreateHotelRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: HotelRoomTypeCreateType) => await HotelRoomApi.createHotelRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-room"] });
    },
  });
};

export const useUpdateHotelRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: HotelRoomTypeUpdateType }) => HotelRoomApi.updateHotelRoom(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-rooms"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-room"] });
      toast.error(`飯店更新成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};
export const useHotelRoomOptions = () => {
  return useQuery({
    queryKey: ["hotel-room-options"],
    queryFn: async () => {
      const result = await HotelRoomApi.getAllHotelRoom({ currentPage: 1, perPage: 999 });
      return result.hotelRooms.map((hotelRoom) => ({
        label: hotelRoom.room_type_name ?? "未命名房型",
        value: hotelRoom.id ?? "",
        basePrice: hotelRoom.basePrice,
      }));
    },
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};

export const useDeleteHotelRoom = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await HotelRoomApi.deleteHotelRoom(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-room"] });
      toast.error(`飯店刪除成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};

export const useToggleHotelRoomStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await HotelRoomApi.toggleActive(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-rooms"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-room"] });
      toast.success("飯店更新成功");
    },
    onError: () => {
      toast.error("飯店更新失敗");
    },
  });
};
