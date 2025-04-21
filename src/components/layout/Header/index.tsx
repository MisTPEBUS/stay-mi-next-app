"use client";
import clsx from "clsx";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "../../ui/button";

import Navbar from "./_components/Navbar";
import { MenuType } from "./types";

const navMenu: MenuType = [
  { title: "關於平台", href: "#" },
  { title: "飯店導覽", href: "#" },
  { title: "訂閱方案", href: "#" },
];

const Header = () => {
  const [opacity, setOpacity] = useState<number>(0);

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
        "sticky top-0 z-30 h-[120px] backdrop-blur-md transition-colors duration-300",
        hasShadow && "shadow-sm"
      )}
    >
      <div className="container m-auto flex h-full items-center justify-between">
        <Link
          href="/"
          className={clsx(
            "text-3xl font-bold transition-colors duration-300",
            isHome && opacity < 0.6 ? "text-white" : "text-black"
          )}
        >
          Staymi
        </Link>
        <div className="flex items-center gap-2">
          <Navbar
            className={clsx("transition-colors duration-300", isHome && opacity < 0.6 ? "text-white" : "text-black")}
            menuList={navMenu}
          />
          <Button asChild>
            <Link href="/login">
              登入
              <LogIn />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
