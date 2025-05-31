import { AxiosResponse } from "axios";

import AxiosStoreClient from "@/api/axios/axiosStoreClient";
import AxiosUserClient from "@/api/axios/axiosUserClient";
import { LoginRequestSchemaType /* , RegisterUserReqSchemaType */, RegisterUserReqSchemaType } from "@/schema/auth.dto";

import { LoginResponse, SignUpResponse, StoreLoginResponse, StoreSignUpResponse } from "./type";

export const AuthApi = {
  login: async (user: LoginRequestSchemaType): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post<LoginResponse>("/users/login", user);

    console.log(response);
    return response;
  },
  signUp: async (user: RegisterUserReqSchemaType): Promise<AxiosResponse<SignUpResponse>> => {
    const response = await AxiosUserClient.post("/users/signup", user);
    console.log(response);
    return response;
  },
  storeLogin: async (storeUser: LoginRequestSchemaType): Promise<AxiosResponse<StoreLoginResponse>> => {
    const response = await AxiosStoreClient.post<LoginResponse>("/login", storeUser);
    console.log(response);
    return response;
  },

  storeSignUp: async (storeUser: RegisterUserReqSchemaType): Promise<AxiosResponse<StoreSignUpResponse>> => {
    const response = await AxiosStoreClient.post("/signup", storeUser);
    console.log(response);
    return response;
  },
  isAuth: async (): Promise<AxiosResponse<LoginResponse>> => {
    const response = await AxiosUserClient.post("/users/isAuth");
    console.log(response);
    return response;
  },
};
