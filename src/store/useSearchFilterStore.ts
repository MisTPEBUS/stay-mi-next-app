import { create } from "zustand";

import { SearchHotelParams } from "@/api/services/user/plan/roomProductPlan";

export type SearchFilterState = Omit<SearchHotelParams, "page" | "limit"> & {
  page: number;
  limit: number;
};
const initialState: SearchFilterState = {
  start_date: undefined,
  end_date: undefined,
  hotel_id: undefined,
  keyWord: undefined,
  hotel_facilities: undefined,
  min_price: undefined,
  max_price: undefined,
  room_service: undefined,
  sort_by: undefined,
  sort_order: undefined,
  page: 1,
  limit: 10,
};

export const useSearchFilterStore = create<{
  filter: SearchFilterState;
  setFilter: (newState: Partial<SearchFilterState>) => void;
  resetFilter: () => void;
}>((set) => ({
  filter: initialState,
  setFilter: (newState) =>
    set((state) => ({
      filter: {
        ...state.filter,
        ...newState,
        page: 1, // 重設分頁
      },
    })),
  resetFilter: () => set({ filter: initialState }),
}));
