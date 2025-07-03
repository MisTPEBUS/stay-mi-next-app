import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

import { SubscriptionApi } from "@/api/services/user/subscription";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { SubscriptionType } from "../page";

type SubscriptionItemProps = {
  plan: SubscriptionType;
  current: string;
};

const PLAN_ORDER = ["free", "plus", "pro"];

const SubscriptionItem = ({ plan, current }: SubscriptionItemProps) => {
  const router = useRouter();

  const currentIndex = PLAN_ORDER.indexOf(current);
  const planIndex = PLAN_ORDER.indexOf(plan.title);
  const isUpgradable = planIndex > currentIndex;

  const isCurrent = current === plan.title || current === "";
  const isDisabled = planIndex < currentIndex;

  let buttonLabel = plan.button;

  if (isCurrent) buttonLabel = "目前方案";
  else if (isDisabled) buttonLabel = "無法選擇較低方案";
  else if (isUpgradable) buttonLabel = `升級 ${plan.title === "pro" ? "Pro" : "Plus"}`;

  const submit = async (plan: string) => {
    const today = new Date().toISOString().slice(0, 10);

    const info = {
      data: { plan, is_recurring: true, cycle: plan === "plus" ? "monthly" : "yearly", started_at: today },
    };

    if (current !== "visitor") {
      const res = await SubscriptionApi.subscribePlan(info);
      router.push(res.data.approveLink);
    } else {
      router.push("/login");
    }
  };
  return (
    <div
      className={twMerge(
        plan.title === "plus" ? "bg-primary-100" : "bg-white-pure",
        "flex w-full flex-col gap-3 rounded-2xl p-6 md:gap-12"
      )}
    >
      <div className="flex flex-col md:items-center md:gap-3">
        <p className="text-xl font-bold capitalize md:text-3xl">Staymi {plan.title}</p>
        <p className="text-black-sub">{plan.description}</p>
      </div>
      <p className="text-2xl font-bold md:text-4xl">{plan.price}</p>
      <ul className="hidden flex-1 list-inside list-disc flex-col gap-5 md:flex">
        {plan.content.map((item) => (
          <li key={item} className="md:text-xl">
            {item}
          </li>
        ))}
      </ul>
      <Accordion type="multiple" className="flex flex-col gap-6 md:hidden">
        <AccordionItem value="item" className="rounded-2xl border-none">
          <AccordionTrigger>方案詳細內容</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-1 list-inside list-disc flex-col gap-3">
              {plan.content.map((item) => (
                <li key={item} className="md:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        size="square"
        variant={plan.title === "plus" ? "default" : "outline"}
        onClick={() => submit(plan.title)}
        disabled={isDisabled || current === plan.title}
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default SubscriptionItem;
