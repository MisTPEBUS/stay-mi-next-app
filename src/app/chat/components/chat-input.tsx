import * as React from "react";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ChatInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(({ className, ...props }, ref) => (
  <Textarea
    autoComplete="off"
    ref={ref}
    name="message"
    className={cn(
      "bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-16 max-h-12 w-full resize-none items-center rounded-md px-4 py-3 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  />
));
ChatInput.displayName = "ChatInput";

export { ChatInput };
