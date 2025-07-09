import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { RoomPlanApi } from "@/api/services/dashboard/plan/roomPlan";
import { HotelProductApi } from "@/api/services/dashboard/product/product";
import { QuerySchemaType } from "@/schema/common/pagination";
import { RoomPlanCreateType, RoomPlanType, RoomPlanUpdateType } from "@/schema/dashboard/roomPlan.dto";

export const useRoomPlansQuery = (params: QuerySchemaType) => {
  return useQuery({
    queryKey: ["hotel-plan-rooms", params.currentPage, params.perPage],
    queryFn: async () => {
      const result = await RoomPlanApi.getAllRoomPlan(params);

      return (
        result ?? {
          roomPlans: [],
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
export const useRoomPlanQuery = (id: string | undefined) => {
  return useQuery<RoomPlanType>({
    queryKey: ["hotel-plan-room", id],
    queryFn: async () => await RoomPlanApi.getRoomPlan(id!),
    enabled: !!id,
  });
};

export const useCreateRoomPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: RoomPlanCreateType) => await RoomPlanApi.createRoomPlan(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-rooms"] });
    },
  });
};

export const useUpdateRoomPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: RoomPlanUpdateType }) => RoomPlanApi.updateRoomPlan(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-rooms"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-room"] });
      toast.success(`飯店更新成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};

export const useDeleteRoomPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await HotelProductApi.deleteHotelProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-room"] });
      toast.error(`飯店刪除成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};

export const useToggleRoomPlanStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await HotelProductApi.toggleActive(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-rooms"] });
      toast.success("狀態更新成功");
    },
    onError: () => {
      toast.error("狀態更新失敗");
    },
  });
};
