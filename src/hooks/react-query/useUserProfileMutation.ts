import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, isAxiosError } from "axios";
import { toast } from "sonner";

import { UserProfileApi } from "@/api/services/user/userInfo";
import { ApiResponse, ErrorResponse } from "@/api/type";
import { UpdateUserProfileReqSchemaType, UpdateUserProfileResSchemaType } from "@/schema/userProfile.dto";
import { useAuthStore } from "@/store/useAuthStore";

export const useUserProfileMutation = () => {
  return useMutation({
    mutationFn: (
      data: UpdateUserProfileReqSchemaType
    ): Promise<AxiosResponse<ApiResponse<{ user: UpdateUserProfileResSchemaType }>>> =>
      UserProfileApi.updateUserProfile(data),
    onSuccess: (res) => {
      const { data } = res;
      console.log("useUserProfileMutation", data);
      toast.success("修改成功");
    },

    onError: (err) => {
      if (isAxiosError<ErrorResponse>(err)) {
        if (err.response?.status === 401) {
          useAuthStore.getState().clearUser(); // ✅ 合理
          toast.error("登入已過期，請重新登入");
        } else {
          toast.error(err.response?.data?.message || "修改失敗，請稍後再試");
        }
      } else {
        toast.error("修改失敗，未知錯誤");
      }
    },
  });
};
