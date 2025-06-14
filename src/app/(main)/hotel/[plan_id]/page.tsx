// page.tsx
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { RoomProductPlanApi } from "@/api/services/user/hotel/roomProductPlan";
import ClientBookingPage from "@/app/(main)/hotel/[plan_id]/clientBookingPage";

type BookingPageProps = {
  params: {
    plan_id: string;
  };
  searchParams?: Record<string, string | string[]>;
};
export const dynamicParams = true;
export const revalidate = 3600;

/* export async function generateStaticParams() {
  const plans = await RoomProductPlanApi.getAllPlanIds();
  return plans.map((plan) => ({ plan_id: plan.plan_id }));
} */

export async function generateStaticParams() {
  return [
    { plan_id: "52accaef-1f99-4131-bfe4-e2e545c9c028" }, // 需要包含這個 ID
    { plan_id: "another-plan-id" },
  ];
}

const BookingPage = async () => {
  const queryClient = new QueryClient();

  const planId = "52accaef-1f99-4131-bfe4-e2e545c9c028";

  await queryClient.prefetchQuery({
    queryKey: ["hotel-plan-room-product", planId],
    queryFn: () => RoomProductPlanApi.getHotelRoomProduct(planId),
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ClientBookingPage planId={planId} />
    </HydrationBoundary>
  );
};

export default BookingPage;
