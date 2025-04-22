import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { LoginRequestSchemaType /* , RegisterUserReqSchemaType */ } from "@/schema/auth.dto";

import { LoginResponse } from "./type";

export const AuthApi = {
  login: async (user: LoginRequestSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post<LoginResponse>("/users/login", user);

    console.log(response);
    return response;
  },
  /*   register: async (user: RegisterUserReqSchemaType) => {
    const response = await AxiosUserClient.post("/register", user);
    return response;
  }, */
};
