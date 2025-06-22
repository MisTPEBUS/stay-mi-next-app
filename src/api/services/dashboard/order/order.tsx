import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { OrderRoomProductType } from "@/schema/dashboard/order.dto";

export const OrderApi = {
  getAllHotelProduct: async (params: QuerySchemaType): Promise<PaginationResult<OrderRoomProductType, "orders">> => {
    const response = await AxiosStoreClient.get<PaginationResult<OrderRoomProductType, "orders">>("/hotel/order", {
      params,
    });
    console.log(response);
    return response.data;
  },
  /* getHotelProduct: async (id: string): Promise<{ product: ProductsType }> => {
    const response = await AxiosStoreClient.get<AxiosResponse<{ product: ProductsType }>>(`/hotel/products/${id}`);
    console.log(response);
    return response.data.data;
  }, */
};
