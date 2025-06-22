import { useQuery } from "@tanstack/react-query";

import { OrderRoomProductApi } from "@/api/services/user/plan/OrderRoomProduct";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

export const useOrderRoomProductQuery = (id: string | undefined) => {
  return useQuery<OrderDetailType>({
    queryKey: ["order-room-product", id],
    queryFn: async () => {
      const res = await OrderRoomProductApi.getOrderRoomProductByID(id ?? "");
      return res;
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 3,
    retry: 1,
  });
};
