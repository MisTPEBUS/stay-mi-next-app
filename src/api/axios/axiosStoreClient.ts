import axios from "axios";
import Cookies from "js-cookie";

import { applyInterceptors } from "./applyInterceptors";

const AxiosStoreClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosStoreClient.interceptors.request.use((config) => {
  const userCookie = Cookies.get("token");
  if (userCookie) {
    try {
      const user = JSON.parse(userCookie);
      config.headers.Authorization = `Bearer ${user.token}`;
    } catch (err) {
      console.warn("token 解析失敗", err);
    }
  }
  return config;
});

export default applyInterceptors(AxiosStoreClient);
