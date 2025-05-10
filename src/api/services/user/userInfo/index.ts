import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { LoginRequestSchemaType /* , RegisterUserReqSchemaType */, RegisterUserReqSchemaType } from "@/schema/auth.dto";

import { LoginResponse } from "./type";

export const UserProfileApi = {
  getUserProfile: async (user: LoginRequestSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post<LoginResponse>("/users/user-profile", user);

    console.log(response);
    return response;
  },
  updateUserProfile: async (user: RegisterUserReqSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.put("/users/user-profile", user);
    console.log(response);
    return response;
  },
};
