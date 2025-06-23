"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-destructive container mb-4 font-bold">404 找不到頁面</h1>
      <p className="text-muted-foreground mb-6">找不到對應的房型資訊，請確認連結是否正確或已被移除。</p>
      <Button onClick={() => router.back()} variant="outline">
        返回上一頁
      </Button>
    </div>
  );
};

export default NotFound;
