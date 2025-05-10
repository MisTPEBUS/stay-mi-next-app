"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { labelMap } from "./labelMap";

export const Breadcrumb = () => {
  const pathname = usePathname();

  const parts = pathname.split("/").filter(Boolean); // 移除空白
  const paths = parts.map((part, i) => ({
    label: labelMap[part] ?? part,
    href: "/" + parts.slice(0, i + 1).join("/"),
  }));

  return (
    <nav className="text-muted-foreground mb-6 text-sm">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link href="/account" className="hover:underline">
            會員中心
          </Link>
        </li>

        {paths.slice(1).map(({ label, href }, i) => (
          <li key={i} className="flex items-center space-x-2 before:mx-2 before:content-['>']">
            <Link href={href} className="capitalize hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
