import { useQuery } from "@tanstack/react-query";

import { RoomProductPlanApi } from "@/api/services/user/hotel/roomProductPlan";
import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

export const useRoomPlanProductQuery = (id: string) => {
  return useQuery<RoomPlanProductType>({
    queryKey: ["hotel-plan-room-product", id],
    queryFn: async () => {
      const res = await RoomProductPlanApi.getHotelRoomProduct(id);

      return res;
    },
    enabled: !!id,
  });
};
