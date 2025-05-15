import React from "react";

import ShadcnSidebar from "@/components/ShadcnSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
interface DashboardLayoutProps {
  children: React.ReactNode;
  /*   brand: React.ReactNode;
  hotel: React.ReactNode;
  sales: React.ReactNode; */
}

const DashboardLayout = ({ children /* , brand, hotel, sales  */ }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <SidebarProvider>
        <ShadcnSidebar />
        <main className="flex-1">
          {children}

          {/* {brand} 
        {hotel}
        {sales}  */}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
