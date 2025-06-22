"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { IconMap } from "@/config/settings";

type IconConfigItem = {
  value: string;
  icon: keyof typeof IconMap;
};

type IconLabelPanelProps = {
  title: string;
  fields: string[];
  config: IconConfigItem[];
  maxVisible?: number;
};

const IconLabelPanel = ({ title, fields, config, maxVisible = 8 }: IconLabelPanelProps) => {
  const matched = config.filter((item) => fields.includes(item.value));
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? matched : matched.slice(0, maxVisible);

  if (matched.length === 0) return null;

  return (
    <section className="border-gray border-opacity-50 border-b pb-10">
      <h4 className="mb-4 text-xl font-bold md:text-2xl">{title}</h4>

      <ul className="grid grid-cols-1 gap-y-4 md:grid-cols-4 md:gap-x-4">
        {visibleItems.map(({ value, icon }) => {
          const Icon = IconMap[icon];
          return (
            <li key={value} className="text-black-main flex items-center gap-4">
              {Icon && <Icon className="size-5" />}
              <span>{value}</span>
            </li>
          );
        })}
      </ul>

      {matched.length > maxVisible && (
        <div className="mt-6">
          <Button variant="outline" className="rounded-lg px-6 py-2" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "選項收起" : `顯示更多共 ${matched.length} 項`}
            {showAll ? <ChevronUp className="ml-1 size-4" /> : <ChevronDown className="size-4" />}
          </Button>
        </div>
      )}
    </section>
  );
};

export default IconLabelPanel;
