import { Suspense } from "react";

import { CompleteOrderClient } from "./client";

const CompleteOrderPage = () => {
  return (
    <Suspense fallback={<div>訂單載入中...</div>}>
      <CompleteOrderClient />
    </Suspense>
  );
};
export default CompleteOrderPage;
