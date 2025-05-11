"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, Minus, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Accordion = ({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
};

const AccordionItem = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
};

const FaqAccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn("group flex w-full items-center gap-4 p-4 md:p-6", className)}
        {...props}
      >
        <div className="flex flex-1 items-center gap-4 md:items-baseline md:gap-6">
          <div className="text-primary-dark text-2xl font-bold md:text-3xl">Q</div>
          <div className="text-primary-dark text-left text-base font-bold transition-transform group-hover:scale-105 md:text-xl">
            {children}
          </div>
        </div>
        <div className="pointer-events-none flex size-6 items-center justify-center">
          <Plus className="size-5 group-data-[state=open]:hidden" />
          <Minus className="hidden size-5 group-data-[state=open]:block" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const FaqAccordionContent = ({ children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) => {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-custom-up data-[state=open]:animate-custom-down overflow-hidden p-4 pt-0 md:p-6"
      {...props}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <div className="text-primary-hover text-2xl font-bold md:text-3xl">A</div>
        <div>
          <div className="text-black-sub me-9 text-left">{children}</div>
        </div>
      </div>
    </AccordionPrimitive.Content>
  );
};
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, FaqAccordionTrigger, FaqAccordionContent };
