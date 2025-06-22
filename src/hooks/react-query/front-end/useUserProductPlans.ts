import { useQuery } from "@tanstack/react-query";

import { UserProductPlanApi } from "@/api/services/user/plan/productPlan";
import { ProductPlanPublicType } from "@/schema/dashboard/productPlan.dto";

export const useUserProductPlans = (hotel_id: string | undefined) => {
  return useQuery<ProductPlanPublicType[]>({
    queryKey: ["user-product-plans", hotel_id],
    queryFn: async () => {
      if (!hotel_id) return [];
      const res = await UserProductPlanApi.getAllProductPlanByHotelID(hotel_id);
      return res.productPlans ?? [];
    },
    enabled: !!hotel_id,
    staleTime: 1000 * 60 * 3,
  });
};
