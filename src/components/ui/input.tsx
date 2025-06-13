import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

// 定義 variants
const inputVariants = cva(
  "flex w-full min-w-0 appearance-none rounded-md border bg-transparent px-4 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "border-input placeholder:text-muted-foreground dark:bg-input/30",
        ghost: "border-none bg-transparent focus:ring-0",
        underline: "border-0 border-b border-muted-foreground rounded-none focus:border-primary",
        dashboardDefault: "focus:border-primary h-8 max-w-xs gap-1.5 rounded px-3 focus:border has-[>svg]:px-2.5 ",
      },
      size: {
        default: "h-12",
        sm: "h-8 text-sm px-3",
        lg: "h-14 text-lg px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 輸入型別
type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    asChild?: boolean;
  };

// 主元件
const Input = ({ className, variant, size, asChild = false, type = "text", ...props }: InputProps) => {
  const Comp = asChild ? Slot : "input";

  return <Comp type={type} data-slot="input" className={cn(inputVariants({ variant, size, className }))} {...props} />;
};

export { Input, inputVariants };
