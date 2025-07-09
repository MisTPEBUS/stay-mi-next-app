import AxiosUserClient from "@/api/axios/axiosUserClient";
import { PaginationResult } from "@/schema/common/pagination";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

type getAllOrderRoomProductProps = {
  currentPage?: number;
  perPage?: number;
  status?: string;
};

export const OrderRoomProductApi = {
  getAllOrderRoomProduct: async ({
    currentPage = 1,
    perPage = 10,
    status,
  }: getAllOrderRoomProductProps): Promise<PaginationResult<OrderDetailType, "orders">> => {
    const params = new URLSearchParams({
      currentPage: String(currentPage),
      perPage: String(perPage),
    });

    if (status !== undefined) {
      params.append("status", status);
    }

    const response = await AxiosUserClient.get<PaginationResult<OrderDetailType, "orders">>(
      `/users/order?${params.toString()}`
    );
    console.log("getOrderRoomProductByID", response);
    return response.data;
  },
  getOrderRoomProductByID: async (id: string): Promise<OrderDetailType> => {
    const response = await AxiosUserClient.get<{ order: OrderDetailType }>(`/users/order/${id}`);
    console.log("getOrderRoomProductByID", response);
    return response.data.order;
  },

  createOrder: async (id: string): Promise<OrderDetailType> => {
    const response = await AxiosUserClient.post<{ order: OrderDetailType }>(`/users/order/${id}`);

    return response.data.order;
  },
};
