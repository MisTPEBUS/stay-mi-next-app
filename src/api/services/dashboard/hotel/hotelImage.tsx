import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import { PaginationResult, QuerySchemaType } from "@/schema/common/pagination";
import { ImageCreateType, ImageType, ImageUpdateType } from "@/schema/dashboard/image";

const HotelImageApi = {
  getAllHotelImages: async (params: QuerySchemaType): Promise<PaginationResult<ImageType, "images">> => {
    const response = await AxiosStoreClient.get<PaginationResult<ImageType, "images">>(
      `/hotel/images?currentPage=${params.currentPage}&perPage=${params.perPage}`
    );
    console.log("response", response);
    return response.data;
  },
  getHotelImage: async (imageId: string): Promise<ImageType> => {
    const response = await AxiosStoreClient.get<{ image: ImageType }>(`/hotel/images/${imageId}`);
    console.log(response);
    return response.data.image;
  },
  updateHotelImage: async (id: string, HotelImageProp: ImageUpdateType): Promise<ImageType> => {
    const response = await AxiosStoreClient.put(`/hotel/images/${id}`, HotelImageProp);
    console.log(response);
    return response.data.data;
  },
  createHotelImage: async (HotelImageProp: ImageCreateType): Promise<ImageType> => {
    const response = await AxiosStoreClient.post<AxiosResponse<ImageType>>("/hotel/images", HotelImageProp);
    console.log(response);
    return response.data.data;
  },
  deleteHotelImage: async (id: string): Promise<AxiosResponse> => {
    const response = await AxiosStoreClient.delete(`/hotel/images/${id}`);
    console.log(response);
    return response;
  },
};

export default HotelImageApi;
