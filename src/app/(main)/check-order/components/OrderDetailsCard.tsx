"use client";

// React 核心 hooks
import { motion } from "framer-motion";
import { ShoppingBag, Clock, DollarSign, Plus, Minus } from "lucide-react";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { OrderDetailsCardProps } from "../types";

export const OrderDetailsCard: React.FC<OrderDetailsCardProps> = ({
  selectedGift,
  handleGiftQuantityChange,
  finalTotal,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="flex"
    >
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            訂單詳情
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">訂單編號</p>
              <p className="font-semibold">[系統自動產生]</p>
            </div>
            <Badge className={`flex items-center gap-1 border-blue-200 bg-blue-100 text-blue-800`}>
              <Clock className="h-4 w-4" />
              "待處理"
            </Badge>
          </div>

          <Separator />

          <div>
            <h4 className="mb-3 font-semibold">訂購伴手禮</h4>
            {selectedGift ? (
              <motion.div
                key={selectedGift.item.id}
                whileHover={{ scale: 1.02 }}
                className="bg-card hover:bg-accent/50 flex items-center justify-between rounded-lg border p-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedGift.item.image} />
                    <AvatarFallback>
                      <ShoppingBag className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedGift.item.name}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleGiftQuantityChange("decrease")}
                        disabled={selectedGift.quantity <= 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-medium">數量: {selectedGift.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => handleGiftQuantityChange("increase")}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="font-semibold">${selectedGift.item.price * selectedGift.quantity}</p>
              </motion.div>
            ) : (
              <p className="text-muted-foreground text-sm">尚未選擇伴手禮。</p>
            )}
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                總計
              </span>
              <span>${finalTotal}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
