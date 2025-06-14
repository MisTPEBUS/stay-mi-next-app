"use client";

import { LogOutIcon, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

const routeTitleMap: Record<string, string> = {
  "/dashboard/hotel": "飯店管理",
  "/dashboard/room-type": "房型管理",
  "/dashboard/hotel-room": "房務管理",
  "/dashboard/image-manager": "圖片管理",
  "/dashboard/product": "伴手禮管理",
  "/dashboard/room-plan": "計畫上架-訂房",
  "/dashboard/product-plan": "計畫上架-伴手禮",
  "/dashboard/orders": "訂單查詢",
};

const DashboardNavbar = () => {
  const pathname = usePathname();
  const title = routeTitleMap[pathname] || "";
  const handleLogout = () => {
    console.log("登出");
  };
  const { toggleSidebar } = useSidebar();
  return (
    <div className="bg-white-pure fixed z-10 w-full py-6 shadow-sm">
      <div className="mx-auto flex items-center justify-between px-4">
        <div className="flex">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-8 w-8" />
          </Button>
          <h3 className="text-black">{title}</h3>
        </div>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOutIcon className="h-5 w-5" />
          登出
        </Button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
