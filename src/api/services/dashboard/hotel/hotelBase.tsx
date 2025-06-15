import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { CreateHotelSchemaType, HotelListSchemaType } from "@/schema/dashboard/hotelBase.dto";

type updateHotelBaseProps = {
  hotelInfo: CreateHotelSchemaType;
  id: string;
};

export const HotelBaseApi = {
  getHotelBase: async (): Promise<AxiosResponse<HotelListSchemaType>> => {
    const response = await AxiosStoreClient.get<HotelListSchemaType>("/hotel");
    console.log(response);
    return response;
  },
  createHotelBase: async (hotelInfo: CreateHotelSchemaType): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.post("/hotel", hotelInfo);
    console.log(response);
    return response;
  },
  updateHotelBase: async ({ hotelInfo, id }: updateHotelBaseProps): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.put(`/hotel/${id}`, hotelInfo);
    console.log(response);
    return response;
  },
};
