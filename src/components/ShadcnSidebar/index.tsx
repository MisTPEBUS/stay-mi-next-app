"use client";

import { Inbox, Settings, FileText, Users, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

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

import { Button } from "../ui/button";

const Items01 = [
  { title: "品牌設定", icon: Inbox, badge: 40, href: "#" },
  { title: "飯店管理", icon: FileText, href: "#" },
  { title: "房型管理", icon: Users, href: "#" },
  { title: "訂房設定", icon: Settings, href: "#" },
  { title: "伴手禮設定", icon: Settings, href: "#" },
  { title: "兔片管理", icon: Settings, href: "#" },
];
const Items02 = [
  { title: "計畫清單", icon: Inbox, badge: 40, href: "#" },
  { title: "新增計畫", icon: FileText, href: "#" },
];
const Items03 = [
  { title: "品牌設定", icon: Inbox, badge: 40, href: "#" },
  { title: "飯店管理", icon: FileText, href: "#" },
];

const ShadcnSidebar = () => {
  const router = useRouter();
  return (
    <Sidebar className="bg-white-pure w-64 border-r p-4">
      <div className="flex items-center justify-between px-4 py-2">
        <p className="text-primary text-xl font-bold">雅TWO飯店</p>
        {/*  <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button> */}
        <SidebarTrigger className="" />
      </div>

      <SidebarContent className="space-y-6">
        {/* Top menu group */}
        <SidebarGroup>
          <SidebarGroupLabel>飯店管理</SidebarGroupLabel>
          <SidebarMenu>
            {Items01.map((item) => (
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
        <SidebarGroup>
          <SidebarGroupLabel>計畫管理</SidebarGroupLabel>
          <SidebarMenu>
            {Items02.map((item) => (
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
        <SidebarGroup>
          <SidebarGroupLabel>訂單管理</SidebarGroupLabel>
          <SidebarMenu>
            {Items03.map((item) => (
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
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="outline"
          onClick={() => {
            router.push("/login");
          }}
        >
          <LogOutIcon className="h-5 w-5" />
          登出
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ShadcnSidebar;
