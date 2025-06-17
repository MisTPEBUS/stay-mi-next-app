import { useQuery } from "@tanstack/react-query";

import { SearchHotelParams, UserRoomProductPlanApi } from "@/api/services/user/plan/roomProductPlan";
import { PaginationResult } from "@/schema/common/pagination";
import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

export const useRoomPlanProductQueryAll = (params: SearchHotelParams = {}) => {
  return useQuery<PaginationResult<RoomPlanProductType, "roomPlansData">>({
    queryKey: ["hotel-plans-room-product", params],
    queryFn: async () => {
      const res = await UserRoomProductPlanApi.getAllHotelRoomProduct(params);
      return res;
    },
    enabled: !!params, // 預防default為 undefined
  });
};
export const useRoomPlanProductQuery = (id: string) => {
  return useQuery<RoomPlanProductType>({
    queryKey: ["hotel-plan-room-product", id],
    queryFn: async () => {
      const res = await UserRoomProductPlanApi.getHotelRoomProduct(id);

      return res;
    },
    enabled: !!id,
  });
};
