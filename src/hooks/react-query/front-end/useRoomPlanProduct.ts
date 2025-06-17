import { useQuery } from "@tanstack/react-query";

import { UserRoomProductPlanApi } from "@/api/services/user/plan/roomProductPlan";
import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

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
