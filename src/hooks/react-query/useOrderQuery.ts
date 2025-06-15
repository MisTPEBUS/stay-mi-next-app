import { useQuery } from "@tanstack/react-query";

import { OrderApi } from "@/api/services/dashboard/order/order";
import { QuerySchemaType } from "@/schema/common/pagination";

export const useOrdersQuery = (params: QuerySchemaType) => {
  return useQuery({
    queryKey: ["hotel-orders", params.currentPage, params.perPage],
    queryFn: async () => {
      const result = await OrderApi.getAllHotelProduct(params);

      return (
        result ?? {
          orders: [],
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
