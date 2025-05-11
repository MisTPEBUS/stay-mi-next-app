import Link from "next/link";
import React from "react";

import { faqItems } from "@/app/faq/faqData";
import IconArrowRight from "@/components/Icons/IconArrowRight";
import { Accordion, AccordionItem, FaqAccordionContent, FaqAccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import SectionTitle from "../SectionTitle";
import { SectionTitleContent } from "../types";

const title: SectionTitleContent = {
  heading: "常見問題",
  label: "FAQ",
};

const FaqSection = () => {
  return (
    <section className="container mx-auto grid gap-6 px-6 py-16 md:grid-cols-4 md:px-0 md:py-[160px]">
      <SectionTitle content={title} orientation="vertical" />
      <div className="col-span-3 text-center md:text-right">
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:gap-8">
          <Accordion type="multiple" className="flex flex-col gap-6">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="bg-white-pure rounded-2xl border-none"
              >
                <FaqAccordionTrigger>{item.question}</FaqAccordionTrigger>
                <FaqAccordionContent>{item.answer}</FaqAccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Button variant="outline" asChild>
          <Link href="/faq">
            More
            <IconArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FaqSection;
