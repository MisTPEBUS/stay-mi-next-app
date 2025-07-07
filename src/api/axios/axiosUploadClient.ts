import axios from "axios";
import Cookies from "js-cookie";

const AxiosUploadClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PUBLIC_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

AxiosUploadClient.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default AxiosUploadClient;
