import { AxiosResponse } from "axios";

import AxiosUserClient from "@/api/axios/axiosUserClient";

type SubscribeRequire = {
  plan: string;
  is_recurring: boolean;
  cycle: string;
  started_at: string;
};

export const SubscriptionApi = {
  getStatus: async (): Promise<AxiosResponse<{ subscriptions: { plan: string; end_at: string } }>> => {
    const response = await AxiosUserClient.get("/users/subscriptions");
    return response;
  },
  subscribePlan: async ({ data }: { data: SubscribeRequire }) => {
    const response = await AxiosUserClient.post("/paypal/create-subscription", data);
    return response;
  },
};
