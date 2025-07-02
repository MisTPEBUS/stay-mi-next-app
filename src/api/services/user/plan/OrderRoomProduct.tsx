import AxiosUserClient from "@/api/axios/axiosUserClient";
import { NamedArrayWrapper } from "@/schema/common/pagination";
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
  }: getAllOrderRoomProductProps): Promise<OrderDetailType> => {
    const response = await AxiosUserClient.get<{ order: OrderDetailType }>(
      `/users/order?currentPage=${currentPage}&perPage=${perPage}&status=${status}`
    );
    console.log("getOrderRoomProductByID", response);
    return response.data.order;
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
