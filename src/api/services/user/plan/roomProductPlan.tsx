import AxiosUserClient from "@/api/axios/axiosUserClient";
import { PaginationResult } from "@/schema/common/pagination";
import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

export type SearchHotelParams = {
  start_date?: string | null;
  end_date?: string | null;
  hotel_id?: string | null;
  keyWord?: string | null;
  hotel_facilities?: string[] | null;
  min_price?: number | null;
  max_price?: number | null;
  room_service?: string[] | null;
  page?: number | null;
  limit?: number | null;
  sort_by?: "price" | "rating" | "name" | null;
  sort_order?: "asc" | "desc" | null;
};
export const UserRoomProductPlanApi = {
  getAllHotelRoomProduct: async (
    params: SearchHotelParams
  ): Promise<PaginationResult<RoomPlanProductType, "roomPlansData">> => {
    const response = await AxiosUserClient.get<PaginationResult<RoomPlanProductType, "roomPlansData">>(
      "/users/search/hotel-plan",
      {
        params,
      }
    );
    console.log(response);
    return response.data;
  },
  getHotelRoomProduct: async (id: string): Promise<RoomPlanProductType> => {
    const response = await AxiosUserClient.get<{ roomPlan: RoomPlanProductType }>(
      `/users/hotel/room-plan/${id}/detail`
    );

    console.log("response", response.data.roomPlan);
    return response.data.roomPlan;
  },
};
