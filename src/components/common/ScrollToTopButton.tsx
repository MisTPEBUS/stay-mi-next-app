"use client";
import { ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DEFAULT_BOTTOM_OFFSET: number = 36;
const FOOTER_HEIGHT: number = 944;

const ScrollToTopButton = () => {
  const [show, setShow] = useState<boolean>(false);
  const [bottomOffset, setBottomOffset] = useState<number>(32);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      // 滾過一頁後才顯示
      setShow(scrollY > viewportHeight);

      // 與底部的距離
      const distanceFromBottom = pageHeight - (scrollY + viewportHeight);

      // 如果離底部少於 footer 高度，按鈕往上，反之維持 default 位置
      if (distanceFromBottom < FOOTER_HEIGHT) {
        setBottomOffset(FOOTER_HEIGHT - distanceFromBottom + DEFAULT_BOTTOM_OFFSET);
      } else {
        setBottomOffset(DEFAULT_BOTTOM_OFFSET);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isHome || !show) return null;
  return (
    <div
      onClick={scrollToTop}
      className="fixed right-4 flex size-12 cursor-pointer items-center justify-center rounded-full border"
      style={{ bottom: `${bottomOffset}px` }}
    >
      <ChevronUp />
    </div>
  );
};

export default ScrollToTopButton;
