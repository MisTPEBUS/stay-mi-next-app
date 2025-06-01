"use client";

import * as Icons from "lucide-react"; // ⭐ 重點：匯入所有圖示
import { LogOutIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { SidebarItem } from "@/app/dashboard/sidebarItems";
import { Button } from "@/components/ui/button";
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
  const router = useRouter();

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
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <a href={item.href} className="hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-2">
                      <Icon className="text-muted-foreground h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
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
