import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { HotelRoomType, HotelRoomTypeCreateType } from "@/schema/dashboard/hotelRoom.dto";

export const HotelRoomApi = {
  getAllHotelRoom: async (params: QuerySchemaType): Promise<PaginationResult<HotelRoomType>> => {
    const response = await AxiosStoreClient.get<{ data: PaginationResult<HotelRoomType> }>("/hotel/room-plan", {
      params,
    });
    console.log(response);
    return response.data.data;
  },
  getHotelRoom: async (id: string): Promise<HotelRoomType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<HotelRoomType>>(`/hotel/room-plan/${id}`);
    console.log(response);
    return response.data.data;
  },
  updateHotelRoom: async (id: string, roomProp: HotelRoomTypeCreateType): Promise<HotelRoomType> => {
    const response = await AxiosStoreClient.put(`/hotel/room-plan/${id}`, roomProp);
    console.log(response);
    return response.data.data;
  },
  createHotelRoom: async (roomProp: HotelRoomTypeCreateType): Promise<HotelRoomType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<HotelRoomType>>("/hotel/room-plan", roomProp);
    console.log(response);
    return response.data.data;
  },
  deleteHotelRoom: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/room-plan/${id}`);
    console.log(response);
    return response;
  },
  toggleActive: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.patch(`/hotel/room-plan/${id}`);
    console.log(response);
    return response;
  },
};
