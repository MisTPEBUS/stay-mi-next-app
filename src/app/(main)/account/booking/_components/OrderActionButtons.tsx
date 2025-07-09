"use client";

import { parseISO, isBefore } from "date-fns";
import { CreditCard, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OrderDetailType } from "@/schema/dashboard/order.dto";

type OrderActionButtonsProps = {
  order: Pick<OrderDetailType, "status" | "check_in_date">;
};

const OrderActionButtons = ({ order }: OrderActionButtonsProps) => {
  const today = new Date();

  if (order.status === "pending") {
    return (
      <Button size="square" className="flex-1">
        <CreditCard />
        立即付款
      </Button>
    );
  }

  if (order.status === "confirmed" && order.check_in_date) {
    const checkIn = parseISO(order.check_in_date);
    if (isBefore(checkIn, today)) {
      return (
        <Button variant="outline" size="square" className="flex-1">
          <X />
          取消訂單
        </Button>
      );
    }
  }

  return null;
};

export default OrderActionButtons;
