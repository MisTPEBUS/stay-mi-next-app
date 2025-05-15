import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";
import { LoginRequestSchemaType /* , RegisterUserReqSchemaType */, RegisterUserReqSchemaType } from "@/schema/auth.dto";

import { LoginResponse } from "./type";

export const AuthApi = {
  login: async (user: LoginRequestSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post<LoginResponse>("/users/login", user);

    console.log(response);
    return response;
  },
  storeLogin: async (storeUser: LoginRequestSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post<LoginResponse>("/users/login", storeUser);
    console.log(response);
    return response;
  },
  storeSignup: async (storeUser: RegisterUserReqSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post("/users/signup", storeUser);
    console.log(response);
    return response;
  },
  isAuth: async (): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post("/users/isAuth");
    console.log(response);
    return response;
  },
};
