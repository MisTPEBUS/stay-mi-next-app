import { useQuery } from "@tanstack/react-query";

import { UserProfileApi } from "@/api/services/user/userInfo";
import { UserProfileResponseSchemaType } from "@/schema/userProfile.dto";

export const useUserProfileQuery = () => {
  return useQuery<{ user: UserProfileResponseSchemaType }>({
    queryKey: ["user-profile"],
    queryFn: async () => {
      const res = await UserProfileApi.getUserProfiles();
      return res.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};
