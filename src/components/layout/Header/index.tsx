"use client";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { useIsHomePage } from "@/hooks/useIsHome";
import { useScrollInfo } from "@/hooks/useScrollInfo";
import { useAuthStore } from "@/store/useAuthStore";

import { Button } from "../../ui/button";
import Logo from "../Logo";

import Navbar from "./_components/Navbar";
import MobileNavbar from "./_components/Navbar/MobileNavbar";
import UserMenu from "./_components/UserMenu";
import { MenuType } from "./types";

const navMenu: MenuType = [
  { title: "關於平台", href: "#" },
  { title: "飯店導覽", href: "#" },
  { title: "訂閱方案", href: "#" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const user = useAuthStore((state) => state.user);
  const isHome = useIsHomePage();
  const { scrollY, viewportHeight } = useScrollInfo();

  const opacity = isHome ? Math.min(scrollY / viewportHeight, 1) : 1;
  const showShadow = opacity > 0.1 || !isHome;

  const backgroundColor = `rgba(247, 245, 239, ${opacity})`;

  return (
    <header
      style={{ backgroundColor }}
      className={twMerge("sticky top-0 z-30 h-14 transition-colors duration-300 md:h-20", showShadow && "shadow-sm")}
    >
      <div className="container m-auto flex h-full items-center gap-2 md:justify-between">
        <div className="flex w-full items-center md:justify-between">
          <div
            role="button"
            tabIndex={0}
            className="absolute flex h-full items-center px-6 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="text-black-sub size-8 transition-colors duration-300" />
          </div>
          <Logo className="mx-auto md:-ms-1 md:-mt-2" />
          <div className="hidden items-center gap-2 md:flex">
            <Navbar className="text-black-sub transition-colors duration-300" menuList={navMenu} />
          </div>
        </div>
        <div className="absolute right-6 flex h-full items-center md:relative md:right-0">
          {user === null ? (
            <Button className="hidden w-30 md:flex" asChild>
              <Link href="/login">
                登入
                <LogIn />
              </Link>
            </Button>
          ) : (
            <UserMenu
              name={user?.name}
              avatar={user?.avatar}
              className={twMerge(
                "transition-colors duration-300",
                isHome && opacity < 0.6 ? "border-transparent bg-white" : "border-black"
              )}
            />
          )}
        </div>
      </div>
      <MobileNavbar isAuth={!!user} menuList={navMenu} open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
