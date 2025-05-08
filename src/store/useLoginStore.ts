import { create } from "zustand";
import { persist } from "zustand/middleware";

type LoginStoreType = {
  rememberMe: boolean;
  email: string;
  setRememberMe: (v: boolean) => void;
  setEmail: (email: string) => void;
  clear: () => void;
};

export const useLoginStore = create<LoginStoreType>()(
  persist(
    (set) => ({
      rememberMe: false,
      email: "",
      setRememberMe: (v) => set({ rememberMe: v }),
      setEmail: (email) => set({ email }),
      clear: () => set({ rememberMe: false, email: "" }),
    }),
    {
      name: "remember-me-store",
    }
  )
);
