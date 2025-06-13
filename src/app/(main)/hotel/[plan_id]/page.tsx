import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";

import { RoomProductPlanApi } from "@/api/services/user/hotel/roomProductPlan";

import ClientBookingPage from "./clientBookingPage";

export const dynamicParams = true;
export const revalidate = 3600;

type BookingPageProps = {
  params: {
    plan_id: string;
  };
  searchParams?: Record<string, string | string[]>;
};

const BookingPage = async ({
  params,
}: {
  params: { plan_id: string };
  searchParams?: Record<string, string | string[]>;
}) => {
  const queryClient = new QueryClient();
  const planId = params.plan_id;

  await queryClient.prefetchQuery({
    queryKey: ["hotel-plan-room-product", planId],
    queryFn: () => RoomProductPlanApi.getHotelRoomProduct(planId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientBookingPage planId={planId} />
    </HydrationBoundary>
  );
};

export default BookingPage;
