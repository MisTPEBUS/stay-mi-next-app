"use client";
import { Calendar, Home, Inbox, Search, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

const ShadcnSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`transition-all duration-300 ${collapsed ? "w-[64px]" : "w-[240px]"} h-screen border-r bg-white`}>
      <Sidebar>
        <SidebarContent>
          <div className="flex justify-end p-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="rounded p-1 hover:bg-gray-100"
              aria-label="Toggle Sidebar"
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>

          <SidebarGroup>
            {!collapsed && <SidebarGroupLabel>Application</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center space-x-2">
                        <item.icon size={20} />
                        {!collapsed && <span>{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default ShadcnSidebar;
