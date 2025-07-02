import { useQuery } from "@tanstack/react-query";

import { SearchHotelParams, UserRoomProductPlanApi } from "@/api/services/user/plan/roomProductPlan";
import { PaginationResult } from "@/schema/common/pagination";
import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
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
      await delay(1000);
      const res = await UserRoomProductPlanApi.getHotelRoomProduct(id);

      return res;
    },
    enabled: !!id,
  });
};
