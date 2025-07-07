import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

import { useAuthStore } from "@/store/useAuthStore";

import { ErrorResponse } from "../type";
export const applyInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    console.log("token:", token);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.data && typeof res.data === "object" && "data" in res.data) {
        return {
          ...res,
          data: res.data.data,
        };
      }
      return res;
    },

    (error: AxiosError<ErrorResponse>) => {
      const status = error?.response?.status || null;
      const { clearUser } = useAuthStore.getState();

      if (status === 401) {
        clearUser();
        setTimeout(() => {
          //  window.location.href = "/login";
        }, 100);
      }
      return Promise.reject(error.response?.data);
    }
  );
  return instance;
};
