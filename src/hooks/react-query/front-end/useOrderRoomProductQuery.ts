import { useQuery } from "@tanstack/react-query";

import { OrderRoomProductApi } from "@/api/services/user/plan/OrderRoomProduct";
import { PaginationResult } from "@/schema/common/pagination";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

type Props = {
  status: "all" | "pending" | "confirmed" | "cancelled";
};
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

export const useOrderRoomProductQueryAll = ({ status }: Props) => {
  return useQuery<PaginationResult<OrderDetailType, "orders">>({
    queryKey: ["order-room-product", status],
    queryFn: async () => {
      const condition = status === "all" ? undefined : status;
      const res = await OrderRoomProductApi.getAllOrderRoomProduct({ status: condition });

      return res;
    },
    enabled: !!status,
    staleTime: 1000 * 60 * 3,
    retry: 1,
  });
};
