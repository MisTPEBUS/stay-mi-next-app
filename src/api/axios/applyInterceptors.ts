import { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import { useAuthStore } from "@/store/useAuthStore";

import { ErrorResponse } from "../type";

export const applyInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.data && res.data.data) {
        res.data = res.data.data;
      }
      return res;
    },

    (error: AxiosError<ErrorResponse>) => {
      const status = error?.response?.status || null;
      const { clearUser } = useAuthStore.getState();

      if (status === 401) {
        //導頁到登入
        clearUser();
        window.location.href = "/login";
      }
      return Promise.reject(error.response?.data);
    }
  );
  return instance;
};
