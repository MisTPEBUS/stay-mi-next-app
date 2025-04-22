import clsx from "clsx";
import { Bell, BookmarkCheck, CreditCard, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { UserMenuType } from "../types";

import AvatarCircle from "./AvatarCircle";

const userMenu: UserMenuType = [
  { label: "通知", href: "#", icon: Bell },
  { label: "我的帳戶", href: "#", icon: UserRound },
  { label: "收藏清單", href: "#", icon: BookmarkCheck },
  { label: "訂單管理", href: "#", icon: CreditCard },
];

const UserMenu = ({ className }: { className: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:ring-0 focus:outline-none focus-visible:ring-0">
        <div className={clsx("flex h-10 w-10 items-center gap-2 rounded-full border md:w-[120px]", className)}>
          <AvatarCircle />
          <div className="me-1 truncate capitalize">スバ友</div>
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
        <DropdownMenuItem className="flex h-12 items-center gap-2 md:h-13">
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
