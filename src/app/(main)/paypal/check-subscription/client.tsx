"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { UserPaypalApi } from "@/api/services/user/paypal";

export const CheckSuccessSubscription = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError("無效的 PayPal Token");
      return;
    }

    const captureSubscription = async () => {
      try {
        const result = await UserPaypalApi.createCaptureOrderByID(token, "subscription");
        router.push("/account/subscription");
      } catch (err) {
        console.error("付款失敗", err);
        setError("付款確認失敗，請聯繫客服");
      }
    };

    captureSubscription();
  }, [token]);

  if (error) return <div className="text-destructive">{error}</div>;
  return <div className="text-muted-foreground">付款確認中...</div>;
};
