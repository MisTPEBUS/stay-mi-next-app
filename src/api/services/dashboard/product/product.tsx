import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { ProductsCreateType, ProductsType } from "@/schema/dashboard/product.dto";

export const HotelProductApi = {
  getAllHotelProduct: async (params: QuerySchemaType): Promise<PaginationResult<ProductsType, "products">> => {
    const response = await AxiosStoreClient.get<PaginationResult<ProductsType, "products">>("/hotel/products", {
      params,
    });
    console.log(response);
    return response.data;
  },
  getHotelProduct: async (id: string): Promise<{ product: ProductsType }> => {
    const response = await AxiosStoreClient.get<AxiosResponse<{ product: ProductsType }>>(`/hotel/products/${id}`);
    console.log(response);
    return response.data.data;
  },
  updateHotelProduct: async (id: string, ProductProp: ProductsCreateType): Promise<ProductsType> => {
    const response = await AxiosStoreClient.put(`/hotel/products/${id}`, ProductProp);
    console.log(response);
    return response.data.data;
  },
  createHotelProduct: async (ProductProp: ProductsCreateType): Promise<ProductsType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<ProductsType>>("/hotel/products", ProductProp);
    console.log(response);
    return response.data.data;
  },
  deleteHotelProduct: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/products/${id}`);
    console.log(response);
    return response;
  },
  toggleActive: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.patch(`/hotel/products/${id}/active`);
    console.log(response);
    return response;
  },
};
