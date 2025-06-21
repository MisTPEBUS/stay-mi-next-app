import AxiosUserClient from "@/api/axios/axiosUserClient";
import { NamedArrayWrapper } from "@/schema/common/pagination";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

type getAllOrderRoomProductProps = {
  currentPage: number;
  perPage: number;
  status: string;
};

export const OrderRoomProductApi = {
  getAllOrderRoomProduct: async ({
    currentPage = 1,
    perPage = 10,
    status,
  }: getAllOrderRoomProductProps): Promise<{ orders: OrderDetailType[] }> => {
    const response = await AxiosUserClient.get<NamedArrayWrapper<OrderDetailType, "orders">>(
      `/users/order?currentPage=${currentPage}&perPage=${perPage}&status=${status}`
    );
    console.log(response);
    return response.data;
  },
  getOrderRoomProductByID: async (id: string): Promise<OrderDetailType> => {
    const response = await AxiosUserClient.post<{ order: OrderDetailType }>(`/users/order/${id}`);

    return response.data.order;
  },
};
