import { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";

import { LoginResponse } from "@/api/services/auth/type";
import { useAuthStore } from "@/store/useAuthStore";

export const useHandleUserLogin = () => {
  const router = useRouter();
  const { setUser } = useAuthStore();

  const handleLogin = (axiosResponse: AxiosResponse<LoginResponse>) => {
    console.log("User取德成功", axiosResponse);
    if (axiosResponse.status === 200 || axiosResponse.status === 201) {
      console.log("User取德成功", axiosResponse.data);
      const { token, user } = axiosResponse.data;
      const { name, avatar } = user;
      setUser({ name, avatar, token });

      console.log("Cookies設置成功", axiosResponse);
      router.push("/");
    }
  };

  return { handleLogin };
};
