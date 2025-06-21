import { Gift } from "lucide-react";
import React from "react";

import { Card } from "@/components/ui/card";
import { formatCurrency } from "@/utils/format";

import { Souvenir } from "../type";

type SouvenirCardProps = {
  souvenirs: Souvenir[];
};

export const SouvenirCard = ({ souvenirs }: SouvenirCardProps) => {
  if (!souvenirs || souvenirs.length === 0) return null;

  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-2">
        <Gift className="text-primary h-5 w-5" />
        <h2 className="text-xl font-semibold">伴手禮資訊</h2>
      </div>

      <div className="space-y-4">
        {souvenirs.slice(0, 1).map(
          (
            item // 最多顯示1種伴手禮
          ) => (
            <div key={item.id} className="bg-muted/30 flex items-center gap-4 rounded-lg p-3">
              <div className="bg-muted flex h-16 w-16 items-center justify-center rounded-md">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-full w-full rounded-md object-cover" />
                ) : (
                  <Gift className="text-muted-foreground h-8 w-8" />
                )}
              </div>

              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-muted-foreground text-sm">數量：{item.quantity}</p>
              </div>

              <div className="text-right">
                <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                <p className="text-muted-foreground text-sm">單價 {formatCurrency(item.price)}</p>
              </div>
            </div>
          )
        )}
      </div>
    </Card>
  );
};
