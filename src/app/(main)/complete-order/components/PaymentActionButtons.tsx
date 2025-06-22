import { Calendar, Printer } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const PaymentActionButtons = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button variant="outline" className="no-print" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          列印訂單
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            router.push("/");
          }}
          className="flex items-center gap-2"
        >
          返回首頁
        </Button>
        <Button
          className="flex items-center gap-2"
          onClick={() => {
            router.push("/account/booking");
          }}
        >
          <Calendar className="h-4 w-4" />
          查看我的訂單
        </Button>
      </div>
    </div>
  );
};

export default PaymentActionButtons;
