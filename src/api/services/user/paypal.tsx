import AxiosUserClient from "@/api/axios/axiosUserClient";
import { SubmitOrderSchemaType } from "@/app/(main)/check-order/types";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

export type createPaypalOrderRes = {
  orderId: string;
  approveLink: string;
};

export const UserPaypalApi = {
  createPaypalOrder: async (params: SubmitOrderSchemaType): Promise<createPaypalOrderRes> => {
    const response = await AxiosUserClient.post<createPaypalOrderRes>(`/paypal/create-order`, params);

    return response.data;
  },
  createCaptureOrderByID: async (id: string, order_type: string): Promise<OrderDetailType> => {
    //paymentID
    const response = await AxiosUserClient.post<{ payment: OrderDetailType }>(`/paypal/capture-order/${id}`, {
      order_type: order_type,
      method: "Paypal",
    });
    console.log(response);
    return response.data.payment;
  },
};
