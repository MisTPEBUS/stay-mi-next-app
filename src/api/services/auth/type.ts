import { ApiResponse } from "@/api/type";

export type UserResponse = {
  name: string;
  avatar: string;
};

export type LoginResponseData = {
  token: string;
  user: UserResponse;
};

export type LoginResponse = LoginResponseData;
