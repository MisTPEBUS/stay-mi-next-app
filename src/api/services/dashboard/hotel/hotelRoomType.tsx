import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { roomTypes, roomTypesCreateType, roomTypesUpdateType } from "@/schema/dashboard/hotelRoomType.dto";

export const HotelRoomTypeApi = {
  getAllHotelRoomType: async (params: QuerySchemaType): Promise<PaginationResult<roomTypes, "roomTypes">> => {
    const response = await AxiosStoreClient.get<PaginationResult<roomTypes, "roomTypes">>("/hotel/room-type", {
      params,
    });

    return response.data;
  },
  getHotelRoomType: async (id: string): Promise<roomTypes> => {
    const response = await AxiosStoreClient.post<AxiosResponse<roomTypes>>(`/hotel/room-type/${id}`);
    console.log(response);
    return response.data.data;
  },
  updateHotelRoomType: async (id: string, roomTypeProp: roomTypesUpdateType): Promise<roomTypes> => {
    const response = await AxiosStoreClient.put(`/hotel/room-type/${id}`, roomTypeProp);
    console.log(response);
    return response.data.data;
  },
  createHotelRoomType: async (roomTypeProp: roomTypesCreateType): Promise<roomTypes> => {
    const response = await AxiosStoreClient.post<AxiosResponse<roomTypes>>("/hotel/room-type", roomTypeProp);
    console.log(response);
    return response.data.data;
  },
  deleteHotelRoomType: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/room-type/${id}`);
    console.log(response);
    return response;
  },
};
