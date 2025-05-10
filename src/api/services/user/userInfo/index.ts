import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { RegisterUserReqSchemaType } from "@/schema/auth.dto";
import { UpdatePasswordResponseType } from "@/schema/userProfile.dto";

import { LoginResponse } from "./type";

export const UserProfileApi = {
  getUserProfile: async (): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post<LoginResponse>("/users/user-profile");

    console.log(response);
    return response;
  },
  updateUserProfile: async (userInfo: RegisterUserReqSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.put("/users/user-profile", userInfo);
    console.log(response);
    return response;
  },
  changePassword: async (pwdField: UpdatePasswordResponseType): Promise<AxiosResponse> => {
    const response = await AxiosUserClient.put("/users/change-password", pwdField);
    console.log(response);
    return response;
  },
};
