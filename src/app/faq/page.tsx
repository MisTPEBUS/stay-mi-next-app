import React from "react";

import { Accordion, AccordionItem, FaqAccordionContent, FaqAccordionTrigger } from "@/components/ui/accordion";
import { generateMetadata } from "@/utils/seo";

import { faqItems } from "./faqData";

export const metadata = generateMetadata({
  title: "FAQ",
  description: "常見問題",
  url: "https://staymi.vercel.app/faq",
});

const Faq = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 px-3 py-10 md:gap-10 md:px-0 md:py-20">
      <div className="text-center text-xl font-bold md:text-4xl">常見問題</div>
      <Accordion type="multiple" className="flex flex-col gap-6">
        {faqItems.map((item) => (
          <AccordionItem key={item.question} value={item.question} className="bg-white-pure rounded-2xl border-none">
            <FaqAccordionTrigger>{item.question}</FaqAccordionTrigger>
            <FaqAccordionContent>{item.answer}</FaqAccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
