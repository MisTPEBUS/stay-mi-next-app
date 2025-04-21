import Link from "next/link";
import React from "react";

import { SitemapProps } from "../../types";

const Sitemap = ({ data }: SitemapProps) => {
  return (
    <div className="hidden grid-cols-2 gap-x-6 gap-y-12 md:grid">
      {data.map((group) => (
        <div key={group.title} className="flex flex-col gap-6 md:min-w-[300px]">
          <div className="text-secondary-300 font-bold">{group.title}</div>
          <div className="flex flex-col gap-3">
            {group.items.map((item) => (
              <Link key={item.label} className="text-secondary-100 font-bold" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sitemap;
