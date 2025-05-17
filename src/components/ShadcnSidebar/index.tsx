"use client";
import { Calendar, Home, Inbox, Settings, User, Clock, FileText, Users, Briefcase, Archive } from "lucide-react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils"; // 如果有用 tailwind 合併工具

const upperItems = [
  { title: "Requests", icon: Inbox, badge: 40 },
  { title: "Polls", icon: FileText },
  { title: "Employees", icon: Users },
  { title: "Settings", icon: Settings },
];

const lowerItems = [
  { title: "Home", icon: Home, active: true },
  { title: "My Info", icon: User },
  { title: "Time Off", icon: Clock },
  { title: "Calendar", icon: Calendar },
  { title: "Directory", icon: Briefcase },
  { title: "Expenses", icon: FileText },
  { title: "Assets", icon: Archive },
];

const ShadcnSidebar = () => {
  return (
    <Sidebar className="bg-white-pure w-64 border-r px-4 py-6">
      <SidebarContent className="space-y-6">
        {/* Logo + Name */}
        <div className="text-primary px-2 text-2xl font-bold">雅TWO飯店</div>

        {/* User section */}
        <div className="flex items-center space-x-3 px-2">
          <Image src="" alt="avatar" width={40} height={40} className="rounded-full" />
          <span className="font-medium">Lobinda</span>
        </div>

        {/* Top menu group */}
        <SidebarGroup>
          <SidebarMenu>
            {upperItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href="#" className="hover:bg-muted flex w-full items-center justify-between rounded-md px-2 py-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="text-muted-foreground h-4 w-4" />
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-muted text-foreground rounded-full px-2 py-0.5 text-xs">{item.badge}</span>
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <hr className="border-muted" />

        {/* Bottom menu group */}
        <SidebarGroup>
          <SidebarMenu>
            {lowerItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a
                    href="#"
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-2",
                      item.active ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      SidebarFooter
    </Sidebar>
  );
};

export default ShadcnSidebar;
