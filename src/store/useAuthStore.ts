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
  setUser: (user: User, token: string) => void;
  clearUser: () => void;
  getToken: () => string | undefined;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user, token) => {
        set({ user });
        Cookies.set("token", token, {
          secure: true,
          sameSite: "strict",
        });
      },
      clearUser: () => {
        set({ user: null });
        Cookies.remove("token");
      },
      getToken: () => Cookies.get("token"),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
