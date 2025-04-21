"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { SitemapProps } from "../../types";

const MobileSitemap = ({ data }: SitemapProps) => {
  const [open, setOpen] = useState("");

  return (
    <Accordion.Root type="single" value={open} onValueChange={setOpen} className="md:hidden" collapsible>
      {data.map((group) => (
        <Accordion.Item key={group.title} value={group.title}>
          <Accordion.Trigger className="text-secondary-300 flex w-full items-center justify-between border-b px-6 py-3">
            <div className="text-left text-sm font-bold">{group.title}</div>
            {open === group.title ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
          </Accordion.Trigger>
          <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down bg-secondary-300 flex flex-col overflow-hidden">
            {group.items.map((item) => (
              <Link
                className="border-secondary border-b px-6 py-3 text-left text-sm text-black"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default MobileSitemap;
