import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { HotelProductApi } from "@/api/services/dashboard/product/product";
import { QuerySchemaType } from "@/schema/common/pagination";
import { ProductsCreateType, ProductsType, ProductsUpdateType } from "@/schema/dashboard/product.dto";

export const useProductsQuery = (params: QuerySchemaType) => {
  return useQuery({
    queryKey: ["hotel-products", params.currentPage, params.perPage],
    queryFn: async () => {
      const result = await HotelProductApi.getAllHotelProduct(params);

      return (
        result ?? {
          HotelRoom: [],
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
export const useHotelProductQuery = (id: string | undefined) => {
  return useQuery<{ product: ProductsType }>({
    queryKey: ["hotel-product", id],
    queryFn: async () => {
      const res = await HotelProductApi.getHotelProduct(id!);
      return res ?? null;
    },
    enabled: !!id,
  });
};

export const useProductOptions = () => {
  return useQuery({
    queryKey: ["hotel-product-options"],
    queryFn: async () => {
      const result = await HotelProductApi.getAllHotelProduct({ currentPage: 1, perPage: 999 });
      return result.products.map((product) => ({
        label: product.name,
        value: product.id,
        imageUrl: product.imageUrl || "/images/no_image_content.svg",
        basePrice: product.price || 0,
      }));
    },
    staleTime: 1000 * 60 * 10,
    retry: 2,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ProductsCreateType) => await HotelProductApi.createHotelProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-product"] });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductsUpdateType }) =>
      HotelProductApi.updateHotelProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-products"] });
      queryClient.invalidateQueries({ queryKey: ["hotel-product"] });
      toast.error(`飯店更新成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => await HotelProductApi.deleteHotelProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-product"] });
      toast.error(`飯店刪除成功`);
    },
    onError: (error) => {
      toast.error(`飯店刪除失敗：${String(error)}`);
    },
  });
};

export const useToggleProductStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      return await HotelProductApi.toggleActive(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotel-products"] });
      toast.success("狀態更新成功");
    },
    onError: () => {
      toast.error("狀態更新失敗");
    },
  });
};
