import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { AuthApi } from "@/api/services/auth";
import { SignUpResponse } from "@/api/services/auth/type";
import { ErrorResponse } from "@/api/type";
import { RegisterUserReqSchemaType } from "@/schema/auth.dto";
import { useAuthStore } from "@/store/useAuthStore";

export const useRegisterMutation = () => {
  const setUser = useAuthStore.getState().setUser;
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterUserReqSchemaType): Promise<AxiosResponse<SignUpResponse>> => AuthApi.signup(data),
    onSuccess: (res) => {
      const { data } = res;

      setUser({
        ...data.user,
        token: data.token,
      });
      toast.success("註冊成功");
      router.push("/");
    },

    onError: (err) => {
      useAuthStore.getState().clearUser();
      if (isAxiosError<ErrorResponse>(err)) {
        toast.error(err.response?.data?.message || "登入失敗，請稍後再試");
      } else {
        toast.error("登入失敗，未知錯誤");
      }
    },
  });
};
