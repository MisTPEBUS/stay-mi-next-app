import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { SearchHotelParams } from "@/api/services/user/plan/roomProductPlan";

export const useHotelSearchParams = (): SearchHotelParams => {
  const searchParams = useSearchParams();

  const getParam = (key: string): string | undefined => {
    const val = searchParams.get(key);
    return val === null ? undefined : val;
  };

  const getArrayParam = (key: string): string[] | undefined => {
    const values = searchParams.getAll(key);
    return values.length > 0 ? values : undefined;
  };

  const query: SearchHotelParams = useMemo(
    () => ({
      start_date: getParam("start_time") ?? null,
      end_date: getParam("end_time") ?? null,
      hotel_id: getParam("hotel_id") ?? null,
      keyWord: getParam("keyWord") ?? null,
      hotel_facilities: getArrayParam("hotel_facilities") ?? null,
      room_service: getArrayParam("room_service") ?? null,
      min_price: getParam("min_price") ? Number(getParam("min_price")) : null,
      max_price: getParam("max_price") ? Number(getParam("max_price")) : null,
      sort_by: getParam("sort_by") as "price" | "date" | null,
      sort_order: getParam("sort_order") as "asc" | "desc" | null,
      page: getParam("page") ? Number(getParam("page")) : null,
      limit: getParam("limit") ? Number(getParam("limit")) : null,
    }),
    [searchParams]
  );

  return query;
};
