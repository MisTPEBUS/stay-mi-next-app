import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { HotelRoomType, HotelRoomTypeCreateType } from "@/schema/dashboard/hotelRoom.dto";

export const HotelRoomApi = {
  getAllHotelRoom: async (params: QuerySchemaType): Promise<PaginationResult<HotelRoomType, "hotelRooms">> => {
    const response = await AxiosStoreClient.get<PaginationResult<HotelRoomType, "hotelRooms">>("/hotel/hotel-rooms", {
      params,
    });
    console.log(response);
    return response.data;
  },
  getHotelRoom: async (id: string): Promise<HotelRoomType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<HotelRoomType>>(`/hotel/hotel-rooms/${id}`);
    console.log(response);
    return response.data.data;
  },
  updateHotelRoom: async (id: string, roomProp: HotelRoomTypeCreateType): Promise<HotelRoomType> => {
    const response = await AxiosStoreClient.put(`/hotel/hotel-rooms/${id}`, roomProp);
    console.log(response);
    return response.data.data;
  },
  createHotelRoom: async (roomProp: HotelRoomTypeCreateType): Promise<HotelRoomType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<HotelRoomType>>("/hotel/hotel-rooms", roomProp);
    console.log(response);
    return response.data.data;
  },
  deleteHotelRoom: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/hotel-rooms/${id}`);
    console.log(response);
    return response;
  },
  toggleActive: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.patch(`/hotel/hotel-rooms/${id}/active`);
    console.log(response);
    return response;
  },
};
