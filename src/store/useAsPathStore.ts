import { create } from "zustand";

type AsPath = {
  prevAsPath: string;
  currentAsPath: string;
};

type AsPathStore = {
  asPath: AsPath;
  setAsPath: (newPath: string) => void;
};

export const useAsPathStore = create<AsPathStore>((set, get) => ({
  asPath: {
    prevAsPath: "/",
    currentAsPath: "/",
  },
  setAsPath: (newPath: string) => {
    const { currentAsPath } = get().asPath;
    set({
      asPath: {
        prevAsPath: currentAsPath,
        currentAsPath: newPath,
      },
    });
  },
}));
