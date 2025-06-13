import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import {
  ProductPlanCreateType,
  productPlansType,
  ProductPlanType,
  ProductPlanUpdateType,
} from "@/schema/dashboard/productPlan.dto";

export const productPlanApi = {
  getAllProductPlan: async (params: QuerySchemaType): Promise<PaginationResult<ProductPlanType, "productPlans">> => {
    const response = await AxiosStoreClient.get<PaginationResult<ProductPlanType, "productPlans">>(
      "/hotel/product-plan",
      {
        params,
      }
    );
    console.log("response", response);
    return response.data;
  },
  getProductPlan: async (id: string): Promise<ProductPlanType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<ProductPlanType>>(`/hotel/product-plan/${id}`);
    console.log(response);
    return response.data.data;
  },
  getProductPlanByHotelId: async (hotel_id: string): Promise<productPlansType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<productPlansType>>(`/hotel/${hotel_id}/product-plans`);
    console.log(response);
    return response.data.data;
  },
  updateProductPlan: async (id: string, productPlanProp: ProductPlanUpdateType): Promise<ProductPlanType> => {
    const response = await AxiosStoreClient.put(`/hotel/product-plan/${id}`, productPlanProp);
    console.log(response);
    return response.data.data;
  },
  createProductPlan: async (productPlanProp: ProductPlanCreateType): Promise<ProductPlanType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<ProductPlanType>>(
      "/hotel/product-plan",
      productPlanProp
    );
    console.log(response);
    return response.data.data;
  },
  deleteProductPlan: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/product-plan/${id}`);
    console.log(response);
    return response;
  },
  toggleActive: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.patch(`/hotel/product-plan/${id}/active`);
    console.log(response);
    return response;
  },
};
