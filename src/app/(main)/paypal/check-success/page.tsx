import { Suspense } from "react";

import { CheckSuccessClient } from "./client";

const CheckSuccessPage = () => {
  return (
    <Suspense>
      <CheckSuccessClient />
    </Suspense>
  );
};

export default CheckSuccessPage;
