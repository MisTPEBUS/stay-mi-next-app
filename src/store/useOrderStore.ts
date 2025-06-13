import { create } from "zustand";
import { persist } from "zustand/middleware";

import { RoomPlanProductType } from "@/schema/dashboard/hotelRoom.dto";

type OrderStore = {
  data: RoomPlanProductType | null;
  setOrder: (data: RoomPlanProductType) => void;
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
