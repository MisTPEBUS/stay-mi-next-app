import * as Icons from "lucide-react";
export type SidebarItem = {
  title: string;
  iconName: keyof typeof Icons; // 動態使用 lucide-react 的 icon 名稱
  href: string;
};

export const sidebarItems: SidebarItem[] = [
  { title: "飯店管理", iconName: "Building2", href: "/dashboard/hotel" },
  { title: "房型管理", iconName: "BedDouble", href: "/dashboard/room-type" },
  { title: "房務管理", iconName: "LayoutGrid", href: "/dashboard/hotel-room" },
  { title: "伴手禮管理", iconName: "Gift", href: "/dashboard/product" },
  { title: "圖片管理", iconName: "Image", href: "/dashboard/image-manager" },
  { title: "計畫上架 - 訂房", iconName: "CalendarPlus", href: "/dashboard/room-plan" },
  { title: "計畫上架 - 伴手禮", iconName: "Upload", href: "/dashboard/product-plan" },
  /* { title: "訂單查詢", iconName: "ShoppingCart", href: "/dashboard/orders" }, */
];
