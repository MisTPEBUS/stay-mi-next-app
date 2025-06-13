import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { RoomPlanCreateType, RoomPlanType, RoomPlanUpdateType } from "@/schema/dashboard/roomPlan.dto";

export const RoomPlanApi = {
  getAllRoomPlan: async (params: QuerySchemaType): Promise<PaginationResult<RoomPlanType, "roomPlans">> => {
    const response = await AxiosStoreClient.get<PaginationResult<RoomPlanType, "roomPlans">>("/hotel/room-plan", {
      params,
    });
    console.log(response);
    return response.data;
  },
  getRoomPlan: async (id: string): Promise<RoomPlanType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<RoomPlanType>>(`/hotel/room-plan/${id}`);
    console.log(response);
    return response.data.data;
  },
  updateRoomPlan: async (id: string, RoomPlanProp: RoomPlanUpdateType): Promise<RoomPlanType> => {
    const response = await AxiosStoreClient.put(`/hotel/room-plan/${id}`, RoomPlanProp);
    console.log(response);
    return response.data.data;
  },
  createRoomPlan: async (RoomPlanProp: RoomPlanCreateType): Promise<RoomPlanType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<RoomPlanType>>("/hotel/room-plan", RoomPlanProp);
    console.log(response);
    return response.data.data;
  },
  deleteRoomPlan: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/room-plan/${id}`);
    console.log(response);
    return response;
  },
  toggleActive: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.patch(`/hotel/room-plan/${id}/active`);
    console.log(response);
    return response;
  },
};
