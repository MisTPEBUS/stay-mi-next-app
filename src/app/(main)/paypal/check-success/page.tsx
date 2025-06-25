// app/(main)/paypal/check-success/page.tsx
import { Suspense } from "react";

import MotionLoading from "../../complete-order/components/motion/motionLoading";

import { CheckSuccessClient } from "./client";

const CheckSuccessPage = () => {
  return (
    <Suspense fallback={<MotionLoading></MotionLoading>}>
      <CheckSuccessClient />
    </Suspense>
  );
};

export default CheckSuccessPage;
