"use client";

import { Button } from "@/components/ui/button";

type SubscriptionRecord = {
  plan: string;
  endDate: string;
  amount: number;
};

const history: SubscriptionRecord[] = [
  { plan: "Staymi Plus", endDate: "2025/5/1", amount: 1500 },
  { plan: "Staymi Plus", endDate: "2025/4/1", amount: 1500 },
];

const SubscriptionHistory = () => {
  return (
    <section className="max-w-3xl rounded border bg-white p-6 shadow-sm">
      <Button variant="outline" className="mb-4">
        訂閱紀錄
      </Button>

      <ul className="space-y-4">
        {history.map((item, idx) => (
          <li key={idx} className="flex items-start justify-between border-b pb-3">
            <div>
              <p className="font-medium">{item.plan}</p>
              <p className="text-muted-foreground text-sm">您的訂閱方案到期日是 {item.endDate}</p>
            </div>
            <div className="text-right text-sm font-medium">NT ${item.amount.toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SubscriptionHistory;
