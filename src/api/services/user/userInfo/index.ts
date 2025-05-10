import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import {
  UpdatePasswordSchemaType,
  UserProfileRequestSchemaType,
  UserProfileResponseSchemaType,
} from "@/schema/userProfile.dto";

import { LoginResponse } from "./type";

export const UserProfileApi = {
  getUserProfile: async (): Promise<AxiosResponse<UserProfileResponseSchemaType>> => {
    const response = await AxiosUserClient.get<UserProfileResponseSchemaType>("/users/user-profile");

    console.log(response);
    return response;
  },
  updateUserProfile: async (userInfo: UserProfileRequestSchemaType): Promise<AxiosResponse<LoginResponse>> => {
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
