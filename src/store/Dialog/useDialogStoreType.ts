import { create } from "zustand";

type DialogStore<T> = {
  open: boolean;
  defaultValue: Partial<T> | null;
  openDialog: (data?: Partial<T> | null) => void;
  closeDialog: () => void;
};

export const createDialogStore = <T>() =>
  create<DialogStore<T>>((set) => ({
    open: false,
    defaultValue: null,
    openDialog: (data = null) => set({ open: true, defaultValue: data }),
    closeDialog: () => {
      set({ open: false });
      setTimeout(() => {
        set({ defaultValue: null });
      }, 300);
    },
  }));
