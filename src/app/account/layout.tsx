import { Breadcrumb } from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";

import { navItems } from "./navItems";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto flex min-h-screen">
      <Sidebar items={navItems} />
      <main className="container flex-1 overflow-y-auto p-6">
        <Breadcrumb />
        {children}
      </main>
    </div>
  );
};

export default AccountLayout;

/* import { AppSidebar } from "@/components/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};
export default AccountLayout; */
