"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { FaqData } from "@/app/faq/page";

type FaqItemProps = { item: FaqData };

const FaqItem = ({ item }: FaqItemProps) => {
  const [open, setOpen] = useState("");

  return (
    <Accordion.Root
      type="single"
      value={open}
      onValueChange={setOpen}
      collapsible
      className="bg-white-pure rounded-3xl"
    >
      <Accordion.Item value={item.question}>
        <Accordion.Trigger className="group flex w-full items-center justify-between p-6">
          <div className="flex items-center gap-6">
            <div className="text-primary-dark text-3xl font-bold">Q</div>
            <div className="text-primary-dark text-left text-xl font-bold transition-transform group-hover:scale-105">
              {item.question}
            </div>
          </div>
          {open === item.question ? <Minus className="size-5 text-black" /> : <Plus className="size-5 text-black" />}
        </Accordion.Trigger>
        <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden p-6">
          <div className="flex items-center gap-6">
            <div className="text-primary-hover text-3xl font-bold">A</div>
            <div>
              <div className="text-black-sub text-left">{item.answer}</div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default FaqItem;
