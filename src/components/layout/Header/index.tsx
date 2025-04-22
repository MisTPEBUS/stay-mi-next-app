"use client";
import clsx from "clsx";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "../../ui/button";

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
  const [opacity, setOpacity] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const ratio = Math.min(scrollY / windowHeight, 1);
    setOpacity(ratio);
  };

  useEffect(() => {
    if (!isHome) return;

    //進入頁面時先初始化一次
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const backgroundColor = isHome ? `rgba(247, 245, 239, ${opacity})` : "rgba(247, 245, 239, 1)";
  const hasShadow = opacity > 0.1 || !isHome;

  return (
    <header
      style={{ backgroundColor }}
      className={clsx(
        "sticky top-0 z-30 h-14 backdrop-blur-md transition-colors duration-300 md:h-[120px]",
        hasShadow && "shadow-sm"
      )}
    >
      <div className="container m-auto flex h-full items-center gap-2 md:justify-between">
        <div className="flex w-full items-center md:justify-between">
          <div className="absolute flex h-full items-center px-6 md:hidden" onClick={() => setOpen(true)}>
            <Menu
              className={clsx(
                "size-8 transition-colors duration-300",
                isHome && opacity < 0.6 ? "text-white" : "text-black"
              )}
            />
          </div>
          <Link
            href="/"
            className={clsx(
              "mx-auto text-2xl font-bold transition-colors duration-300 md:mx-0 md:text-3xl",
              isHome && opacity < 0.6 ? "text-white" : "text-black"
            )}
          >
            Staymi
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            <Navbar
              className={clsx("transition-colors duration-300", isHome && opacity < 0.6 ? "text-white" : "text-black")}
              menuList={navMenu}
            />
            <Button className="hidden" asChild>
              <Link href="/login">
                登入
                <LogIn />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute right-6 flex h-full items-center md:relative md:right-0">
          <UserMenu
            className={clsx(
              "transition-colors duration-300",
              isHome && opacity < 0.6 ? "border-transparent bg-white" : "border-black"
            )}
          />
        </div>
      </div>
      <MobileNavbar menuList={navMenu} open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
