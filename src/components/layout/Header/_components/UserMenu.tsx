import { Bell, BookmarkCheck, CreditCard, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/useAuthStore";

import { UserMenuProps, UserMenuType } from "../types";

import AvatarCircle from "./AvatarCircle";

const userMenu: UserMenuType = [
  { label: "通知", href: "#", icon: Bell },
  { label: "我的帳戶", href: "/account/profile", icon: UserRound },
  { label: "收藏清單", href: "/account/currentlyList", icon: BookmarkCheck },
  { label: "訂單管理", href: "/account/booking", icon: CreditCard },
];

const UserMenu = ({ name, avatar, className }: UserMenuProps) => {
  const { clearUser } = useAuthStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:ring-0 focus:outline-none focus-visible:ring-0">
        <div
          className={twMerge(
            "flex h-10 w-10 items-center justify-center gap-2 rounded-full border md:w-[120px] md:justify-start",
            className
          )}
        >
          <AvatarCircle avatar={avatar} />
          <div className="me-1 hidden truncate capitalize md:block">{name}</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px] rounded-xl border-none">
        {userMenu.map((item) => (
          <Link href={item.href} key={item.label}>
            <DropdownMenuItem className="flex h-12 items-center gap-2 md:h-13">
              <div className="flex size-6 items-center justify-center">
                <item.icon className="size-5 text-black" />
              </div>
              {item.label}
            </DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex h-12 items-center gap-2 md:h-13" onClick={() => clearUser()}>
          <div className="flex size-6 items-center justify-center">
            <LogOut className="size-5 text-black" />
          </div>
          登出
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
