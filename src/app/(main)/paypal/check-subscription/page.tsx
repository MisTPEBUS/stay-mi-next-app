import { Suspense } from "react";

import MotionLoading from "../../complete-order/components/motion/motionLoading";

import { CheckSuccessSubscription } from "./client";

const CheckSuccessPage = () => {
  return (
    <Suspense fallback={<MotionLoading></MotionLoading>}>
      <CheckSuccessSubscription />
    </Suspense>
  );
};

export default CheckSuccessPage;
