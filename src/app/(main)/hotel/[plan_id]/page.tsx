import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

import { RoomProductPlanApi } from "@/api/services/user/hotel/roomProductPlan";
import { getBookingPageMetadata } from "@/utils/generateMetadata";

import ClientBookingPage from "./clientBookingPage";

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { plan_id: string } }): Promise<Metadata> {
  return getBookingPageMetadata(params.plan_id);
}

const BookingPage = async ({
  params,
  searchParams,
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
