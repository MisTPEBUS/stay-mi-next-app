"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { NavItemType } from "./type";

type SidebarProps = {
  items: NavItemType[];
};

const Sidebar = ({ items }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <nav className="bg-white-pure hidden w-1/4 space-y-2 rounded-3xl md:block">
      <div className="border-gray-light/50 border-b p-6 text-2xl font-bold">會員中心</div>
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "hover:bg-primary/10 mx-2 flex h-14 items-center gap-2 rounded-[.5rem] px-4 transition-colors",
            pathname === href ? "bg-primary/10 text-primary" : ""
          )}
        >
          <Icon className="h-5 w-5" />
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
