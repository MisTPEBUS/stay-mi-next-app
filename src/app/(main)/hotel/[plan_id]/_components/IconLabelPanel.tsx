"use client";

import React from "react";

import { IconMap } from "@/config/settings";

type IconConfigItem = {
  value: string;
  icon: keyof typeof IconMap;
};

type RoomHTMLPanelProps = {
  title: string;
  fields: string[];
  config: IconConfigItem[];
};

const IconLabelPanel = ({ title, fields, config }: RoomHTMLPanelProps) => {
  const matched = config.filter((item) => fields.includes(item.value));

  return (
    <section className="border-gray space-y-4 border-b pb-10">
      <h3 className="mb-4 font-bold">{title}</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {matched.map(({ value, icon }) => {
          const Icon = IconMap[icon];
          return (
            <div key={value} className="flex items-center gap-2 rounded-lg px-3 py-2">
              {Icon && <Icon className="text-primary h-5 w-5" />}
              <span className="text-sm">{value}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IconLabelPanel;
