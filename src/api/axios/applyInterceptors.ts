import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

import { useAuthStore } from "@/store/useAuthStore";
import { ErrorResponse } from "@/types/ErrorResponse";
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
      /*  const { clearUser } = useAuthStore(); */

      if (typeof window !== "undefined" && status === 401) {
        /*  clearUser(); //刪除逾時token */
        //導頁到登入
        window.location.href = "/login";
      }
      return Promise.reject(error.response?.data);
    }
  );
  return instance;
};
