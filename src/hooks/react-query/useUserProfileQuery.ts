// src/hooks/queries/useUserProfileQuery.ts

import { useQuery } from "@tanstack/react-query";

import { UserProfileApi } from "@/api/services/user/userInfo";
import { UserProfileResponseSchemaType } from "@/schema/userProfile.dto";

export const useUserProfileQuery = () => {
  return useQuery<UserProfileResponseSchemaType>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await UserProfileApi.getUserProfile();
      return res.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};
