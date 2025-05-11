"use client";
import { CreditCard, UserRound, Bell, BookmarkCheck } from "lucide-react";

import { NavItemType } from "@/components/Sidebar/type";

export const navItems: NavItemType[] = [
  { label: "通知", href: "/account/notification", icon: Bell },
  { label: "我的帳戶", href: "/account/profile", icon: UserRound },
  { label: "歷史清單", href: "/account/currentlyList", icon: BookmarkCheck },
  { label: "訂單管理", href: "/account/booking", icon: CreditCard },
] as const;
