import React from "react";

import SubscriptionCard from "./_components/SubscriptionCard";
import SubscriptionHistory from "./_components/SubscriptionHistory";

const Subscription = () => {
  return (
    <div className="flex flex-col gap-6">
      <SubscriptionCard />
      <SubscriptionHistory />
    </div>
  );
};

export default Subscription;
