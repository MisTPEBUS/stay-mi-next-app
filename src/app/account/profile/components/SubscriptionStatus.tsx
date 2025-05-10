"use client";

import { Button } from "@/components/ui/button";

import SubscriptionHistory from "./SubscriptionHistory";

const SubscriptionStatus = () => {
  return (
    <section className="bg-white-pure mx-auto max-w-4xl space-y-6 rounded border p-6">
      <h2 className="text-xl font-bold">訂閱狀態</h2>

      <div className="bg-white-pure rounded border p-4 shadow-sm">
        <p className="text-base font-medium">
          目前方案：<span className="text-primary">Staymi Plus</span>
        </p>
        <p className="text-muted-foreground mt-1 text-sm">
          到期日：<span className="text-foreground font-medium">2025/8/1</span>
        </p>

        <div className="mt-4 flex justify-end gap-2 md:justify-start">
          <Button variant="default">變更方案</Button>
          <Button variant="outline">取消訂閱</Button>
        </div>
      </div>
      <h2 className="text-xl font-bold">歷史紀錄</h2>

      <SubscriptionHistory />
    </section>
  );
};

export default SubscriptionStatus;
