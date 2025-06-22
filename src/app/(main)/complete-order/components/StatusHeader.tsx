import { CheckCircle } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";

type PaymentSuccessHeaderProps = {
  orderId: string;
};

export const PaymentSuccessHeader = ({ orderId }: PaymentSuccessHeaderProps) => {
  return (
    <div className="space-y-4 text-center">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-foreground text-3xl font-bold">付款成功！</h1>
      <p className="text-muted-foreground">感謝您的預訂，我們已收到您的付款。確認信件將發送至您的電子郵件。</p>
      <Badge variant="secondary" className="bg-white text-sm">
        訂單編號：{orderId}
      </Badge>
    </div>
  );
};
