"use client";

import { Button } from "@/components/ui/button";

const SubscriptionStatus = () => {
  return (
    <section className="max-w-2xl rounded border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">訂閱狀態</h2>

      <div className="mb-4 space-y-2">
        <p>
          目前方案：<span className="text-primary font-medium">Staymi Plus</span>
        </p>
        <div className="flex gap-2">
          <Button variant="secondary">變更方案</Button>
          <Button variant="destructive" className="text-destructive border-destructive hover:bg-destructive/10">
            取消訂閱
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          您的訂閱方案到期日是 <span className="text-foreground font-medium">2025/5/1</span>
        </p>
      </div>

      <Button variant="outline">訂閱紀錄</Button>
    </section>
  );
};
export default SubscriptionStatus;
