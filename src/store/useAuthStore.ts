import Cookies from "js-cookie";
import { create } from "zustand";

type User = {
  name: string;
  avatar: string;
  token: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  initCookies: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => {
    if (user) {
      Cookies.set("token", JSON.stringify(user), {
        secure: true,
        sameSite: "strict",
      });
      set({ user });
    }
  },
  clearUser: () => {
    set({ user: null });
    Cookies.remove("token");
  },
  initCookies: () => {
    const token = Cookies.get("token");
    if (token) {
      const { name, avatar, token: userToken } = JSON.parse(token);
      set({ user: { name, avatar, token: userToken } });
    }
  },
}));
