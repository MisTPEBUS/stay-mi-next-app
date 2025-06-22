import { Suspense } from "react";

import ClientBookingPage from "@/app/(main)/hotel/[plan_id]/clientBookingPage";

const BookingPage = async () => {
  return (
    <Suspense fallback={<div>訂單載入中...</div>}>
      <ClientBookingPage />
    </Suspense>
  );
};

export default BookingPage;
