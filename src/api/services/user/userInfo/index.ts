import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import {
  UpdatePasswordSchemaType,
  UpdateUserProfileReqSchemaType,
  UserProfileResponseSchemaType,
} from "@/schema/userProfile.dto";

export const UserProfileApi = {
  getUserProfiles: async (): Promise<AxiosResponse<{ user: UserProfileResponseSchemaType }>> => {
    const response = await AxiosUserClient.get<{ user: UserProfileResponseSchemaType }>("/users/user-profile");

    console.log(response);
    return response;
  },
  updateUserProfile: async (userInfo: UpdateUserProfileReqSchemaType): Promise<AxiosResponse> => {
    const response = await AxiosUserClient.put("/users/user-profile", userInfo);
    console.log(response);
    return response;
  },
  changePassword: async (pwdField: UpdatePasswordSchemaType): Promise<AxiosResponse> => {
    const response = await AxiosUserClient.put("/users/change-password", pwdField);
    console.log(response);
    return response;
  },
};
