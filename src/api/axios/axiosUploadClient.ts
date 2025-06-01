import axios from "axios";
import cookies from "js-cookie";

const userCookie = cookies.get("token");

let token = "";
if (userCookie) {
  const user = JSON.parse(userCookie);
  token = user.token;
}

export const AxiosUploadClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PUBLIC_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  },
});
