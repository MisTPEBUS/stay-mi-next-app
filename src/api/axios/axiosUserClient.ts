import axios from "axios";

import { applyInterceptors } from "./applyInterceptors";

const AxiosUserClient = applyInterceptors(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_PUBLIC_URL,
    headers: {
      "Content-Type": "application/json",
    },
  })
);

export default AxiosUserClient;
