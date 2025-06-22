import React from "react";

import ShadcnSidebar from "@/components/ShadcnSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import DashboardNavbar from "./_components/NavBar";
import { sidebarItems } from "./sidebarItems";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => (
  <>
    <div className="flex h-full w-full">
      <SidebarProvider>
        <ShadcnSidebar items={sidebarItems} />
        <main className="w-full space-y-4 overflow-x-auto">
          <DashboardNavbar></DashboardNavbar>
          <div className="mt-26">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  </>
);

export default DashboardLayout;
