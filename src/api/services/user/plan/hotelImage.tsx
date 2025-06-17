import AxiosUserClient from "@/api/axios/axiosUserClient";
import { NamedArrayWrapper } from "@/schema/common/pagination";
import { ImageType } from "@/schema/dashboard/image.dto";

const UserHotelImageApi = {
  getAllHotelImages: async (hotel_id: string): Promise<{ images: ImageType[] }> => {
    const response = await AxiosUserClient.get<NamedArrayWrapper<ImageType, "images">>(
      `/users/hotel/${hotel_id}/images`
    );
    console.log(response);
    return response.data;
  },
};

export default UserHotelImageApi;
