import Cookies from "js-cookie";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { SubmitOrderSchemaType } from "@/app/(main)/check-order/types";
import { OrderDetailType } from "@/schema/dashboard/order.dto";
const token = Cookies.get("token");
export type createPaypalOrderRes = {
  orderId: string;
  approveLink: string;
};

export const UserPaypalApi = {
  createPaypalOrder: async (params: SubmitOrderSchemaType): Promise<createPaypalOrderRes> => {
    const response = await AxiosUserClient.post<createPaypalOrderRes>(`/paypal/create-order`, params);
    console.log(token);
    return response.data;
  },
  createCaptureOrderByID: async (id: string, order_type: string): Promise<OrderDetailType> => {
    //paymentID
    console.log(token);
    const response = await AxiosUserClient.post<{ payment: OrderDetailType }>(
      `/paypal/capture-order/${id}`,
      {
        order_type: order_type,
        method: "Paypal",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response.data.payment;
  },
};
