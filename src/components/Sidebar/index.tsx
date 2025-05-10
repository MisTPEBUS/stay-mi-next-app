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
    <nav className="bg-background w-64 space-y-2 p-4">
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "hover:bg-muted flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            pathname === href ? "bg-muted text-primary" : "text-muted-foreground"
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
