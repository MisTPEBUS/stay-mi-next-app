// app/(main)/paypal/check-success/page.tsx
import { Suspense } from "react";

import { CheckSuccessClient } from "./client";

const CheckSuccessPage = () => {
  return (
    <Suspense fallback={<div>確認付款中...</div>}>
      <CheckSuccessClient />
    </Suspense>
  );
};

export default CheckSuccessPage;
