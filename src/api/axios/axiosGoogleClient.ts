import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import Cookies from "js-cookie";

import { ErrorResponse } from "@/types/ErrorResponse";
export const AxiosGoogleClient = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      console.log("applyInterceptors", res.data);
      if (res.data && res.data.data) {
        res.data = res.data.data;
      }
      return res;
    },
    (error: AxiosError<ErrorResponse>) => {
      const res = error.response;
      const status = res?.status;
      const message = res?.data?.message ?? "系統錯誤，請稍後再試";

      console.log(message);
      if (typeof window !== "undefined" && status === 401) {
        Cookies.remove("token"); //刪除逾時token
        //導頁到登入
      }
      return Promise.reject(error.response?.data);
    }
  );
  return instance;
};
export default AxiosGoogleClient;
