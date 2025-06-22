"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useHotelSearchParams = () => {
  const searchParams = useSearchParams();

  const query = useMemo(() => {
    const start_date = searchParams.get("start_date");
    const end_date = searchParams.get("end_date");
    const hotel_id = searchParams.get("hotel_id");
    const keyWord = searchParams.get("keyWord");

    return {
      start_date: start_date ?? null,
      end_date: end_date ?? null,
      hotel_id: hotel_id ?? null,
      keyWord: keyWord ?? null,
    };
  }, [searchParams]);

  return query;
};
