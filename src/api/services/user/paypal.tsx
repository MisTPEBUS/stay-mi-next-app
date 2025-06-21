import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { SubmitOrderSchemaType } from "@/app/(main)/check-order/types";

export type createPaypalOrderRes = {
  orderId: string;
  approveLink: string;
};
export type createCaptureOrderByID = {
  order_type: string;
  method: string;
};
export const UserPaypalApi = {
  createPaypalOrder: async (params: SubmitOrderSchemaType): Promise<createPaypalOrderRes> => {
    const response = await AxiosUserClient.post<createPaypalOrderRes>(`/paypal/create-order`, params);

    return response.data;
  },
  createCaptureOrderByID: async (id: string): Promise<createCaptureOrderByID> => {
    //paymentID
    const response = await AxiosUserClient.post<AxiosResponse<createCaptureOrderByID>>(`/paypal/capture-order/${id}`);
    console.log(response);
    return response.data.data;
  },
};
