import { create } from "zustand";
import { persist } from "zustand/middleware";

import { RoomPlanOrderRaw } from "@/app/(main)/check-order/types";

type OrderStore = {
  data: RoomPlanOrderRaw | null;
  setOrder: (data: RoomPlanOrderRaw) => void;
  clearOrder: () => void;
};

export const useOrderStore = create<OrderStore>()(
  persist(
    (set) => ({
      data: null,
      setOrder: (data) => set({ data }),
      clearOrder: () => set({ data: null }),
    }),
    {
      name: "order-storage",
    }
  )
);
