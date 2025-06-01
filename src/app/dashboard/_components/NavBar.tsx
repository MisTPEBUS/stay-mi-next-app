"use client";

import { LogOutIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

const routeTitleMap: Record<string, string> = {
  "/dashboard/hotel": "飯店管理",
  "/dashboard/room-type": "房型管理",
  "/dashboard/hotel-room": "房務管理",
  "/dashboard/hotel-image": "圖片管理",
  "/dashboard/product": "伴手禮管理",
  "/dashboard/plan-room": "計畫上架-訂房",
  "/dashboard/plan-product": "計畫上架-伴手禮",
};

const DashboardNavbar = () => {
  const pathname = usePathname();

  const title = routeTitleMap[pathname] || "有路由沒有名字搞毛";

  const handleLogout = () => {
    console.log("登出");
  };

  return (
    <div className="bg-white-pure w-full py-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <h3 className="text-black">{title}</h3>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOutIcon className="h-5 w-5" />
          登出
        </Button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
