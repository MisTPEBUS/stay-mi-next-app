"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { SearchFilterState } from "@/store/useSearchFilterStore";

export const useHotelSearchParams = (): Partial<SearchFilterState> => {
  const searchParams = useSearchParams();

  const getParam = (key: string): string | undefined => {
    const val = searchParams.get(key);
    return val === null ? undefined : val;
  };

  const query = useMemo(() => {
    return {
      start_time: getParam("start_time"),
      end_time: getParam("end_time"),
      hotel_id: getParam("hotel_id"),
      keyWord: getParam("keyWord"),
    };
  }, [searchParams]);

  return query;
};
