import { Receipt } from "lucide-react";
import React from "react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency, formatDate } from "@/utils/format";

import { OrderDetails } from "../type";

import { getFinalTotal } from "./dataTransform";

type OrderSummaryCardProps = {
  orderDetails: OrderDetails;
};

export const OrderSummaryCard = ({ orderDetails }: OrderSummaryCardProps) => {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <Receipt className="text-primary h-5 w-5" />
        <h2 className="text-xl font-semibold">訂單明細</h2>
      </div>

      <div className="space-y-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium">聯絡人姓名</p>
              <p className="text-muted-foreground text-sm">{orderDetails.contactName}</p>
            </div>
            <div>
              <p className="text-sm font-medium">聯絡人電子郵件</p>
              <p className="text-muted-foreground text-sm">{orderDetails.contactEmail}</p>
            </div>
            <div>
              <p className="text-sm font-medium">聯絡人電話</p>
              <p className="text-muted-foreground text-sm">{orderDetails.contactPhone}</p>
            </div>
            <div>
              <p className="text-sm font-medium">付款人姓名</p>
              <p className="text-muted-foreground text-sm">{orderDetails.paymentName}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium">付款人電子郵件</p>
              <p className="text-muted-foreground text-sm">{orderDetails.paymentEmail}</p>
            </div>
            <div>
              <p className="text-sm font-medium">付款人電話</p>
              <p className="text-muted-foreground text-sm">{orderDetails.paymentPhone}</p>
            </div>
            <div>
              <p className="text-sm font-medium">訂購日期</p>
              <p className="text-muted-foreground text-sm">{formatDate(orderDetails.bookingDate)}</p>
            </div>
            <div>
              <p className="text-sm font-medium">訂單狀態</p>
              <p className="text-muted-foreground text-sm">{orderDetails.status}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between text-lg font-semibold">
            <span>總計</span>
            <span className="text-primary">{formatCurrency(getFinalTotal(orderDetails))}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
