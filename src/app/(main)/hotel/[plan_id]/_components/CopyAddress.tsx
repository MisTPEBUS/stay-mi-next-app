"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"; // or use your own Toast system

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type CopyAddressProps = {
  address: string;
  className?: string;
};

export const CopyAddress = ({ address, className }: CopyAddressProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success("地址已複製");
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("複製失敗:", err);
      toast.error("複製失敗，請手動複製");
    }
  };

  const disabled = !address?.trim();

  return (
    <div className={`flex items-center ${className ?? ""}`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            disabled={disabled}
            className="hover:text-primary active:bg-primary-100 size-10 active:rounded-full"
          >
            <Copy className="size-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{copied ? "已複製" : "複製地址"}</TooltipContent>
      </Tooltip>
    </div>
  );
};
