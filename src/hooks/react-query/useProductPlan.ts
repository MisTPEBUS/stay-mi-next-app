import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { productPlanApi } from "@/api/services/dashboard/plan/productPlan";
import { QuerySchemaType } from "@/schema/common/pagination";
import { ProductPlanCreateType, ProductPlanType, ProductPlanUpdateType } from "@/schema/dashboard/productPlan.dto";

export const useProductsPlanQuery = (params: QuerySchemaType) => {
  return useQuery({
    queryKey: ["hotel-plan-products", params.currentPage, params.perPage],
    queryFn: async () => {
      const result = await productPlanApi.getAllProductPlan(params);

      return (
        result ?? {
          productPlans: [],
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
export const useProductPlanQuery = (id: string | undefined) => {
  return useQuery<ProductPlanType>({
    queryKey: ["hotel-product-plan", id],
    queryFn: async () => await productPlanApi.getProductPlan(id!),
    enabled: !!id,
  });
};

export const useCreateProductPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ProductPlanCreateType) => await productPlanApi.createProductPlan(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-products"] });
    },
  });
};

export const useUpdateProductPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductPlanUpdateType }) =>
      productPlanApi.updateProductPlan(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-products"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-product"] });
      toast.error(`計畫更新成功`);
    },
    onError: (error) => {
      toast.error(`計畫刪除失敗：${String(error)}`);
    },
  });
};

export const useDeleteProductPlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await productPlanApi.deleteProductPlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-product"] });
      toast.error(`計畫刪除成功`);
    },
    onError: (error) => {
      toast.error(`計畫刪除失敗：${String(error)}`);
    },
  });
};

export const useToggleProductPlanStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await productPlanApi.toggleActive(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-plan-products"] });
      toast.success("計畫更新成功");
    },
    onError: () => {
      toast.error("計畫更新失敗");
    },
  });
};
