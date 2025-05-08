import Cookies from "js-cookie";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  name: string;
  avatar: string;
  token: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  initFromCookies: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => {
        Cookies.set("token", JSON.stringify(user), {
          secure: true,
          sameSite: "strict",
        });
        set({ user });
      },
      clearUser: () => {
        Cookies.remove("token");
        set({ user: null });
      },
      initFromCookies: () => {
        const token = Cookies.get("token");
        if (token) {
          try {
            const parsed: User = JSON.parse(token);
            set({ user: parsed });
          } catch (error: unknown) {
            console.error(" Cookie 中的 token 解析失敗", error);
          }
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
