"use client";

import clsx from "clsx";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SidebarItem } from "@/app/dashboard/sidebarItems";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type Props = {
  items: SidebarItem[];
};

const ShadcnSidebar = ({ items }: Props) => {
  const pathname = usePathname();
  return (
    <Sidebar className="bg-white-pure w-64 border-r p-4">
      <div className="flex items-center justify-between px-4 py-2">
        <p className="text-primary text-xl font-bold">Stay-Mi ERP</p>
        <SidebarTrigger />
      </div>

      <SidebarContent className="space-y-6">
        <SidebarGroup>
          <SidebarGroupLabel>功能列表</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => {
              const Icon = (Icons[item.iconName] as LucideIcon) ?? Icons.FileText;
              const isActive = pathname.startsWith(item.href);
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex w-full items-center gap-2 rounded-md px-2 py-2 transition outline-none",
                        isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted",
                        "focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
};

export default ShadcnSidebar;
