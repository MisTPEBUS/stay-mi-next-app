import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { NamedArrayWrapper } from "@/schema/common/pagination";
import { ProductPlanPublicType, ProductPlanType } from "@/schema/dashboard/productPlan.dto";

export const UserProductPlanApi = {
  getAllProductPlanByHotelID: async (hotelId: string): Promise<{ productPlans: ProductPlanPublicType[] }> => {
    const response = await AxiosUserClient.get<NamedArrayWrapper<ProductPlanPublicType, "productPlans">>(
      `/users/hotel/${hotelId}/product-plans`
    );
    console.log(response);
    return response.data;
  },
  getProductPlanByHotelID: async (id: string, productId: string): Promise<ProductPlanType> => {
    const response = await AxiosUserClient.post<AxiosResponse<ProductPlanType>>(
      `/hotel/${id}/product-plans/${productId}`
    );
    console.log(response);
    return response.data.data;
  },
};
