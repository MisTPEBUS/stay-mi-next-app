import AxiosUserClient from "@/api/axios/axiosUserClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";
import { ProductsType } from "@/schema/dashboard/product.dto";

export const RoomProductPlanApi = {
  getAllHotelProduct: async (params: QuerySchemaType): Promise<PaginationResult<ProductsType, "products">> => {
    const response = await AxiosUserClient.get<PaginationResult<ProductsType, "products">>("/hotel/products", {
      params,
    });
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
