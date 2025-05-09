"use client";
import { ChevronUp } from "lucide-react";

import { useIsHomePage } from "@/hooks/useIsHome";
import { useScrollInfo } from "@/hooks/useScrollInfo";

const DEFAULT_BOTTOM_OFFSET = 36;
const FOOTER_HEIGHT = 944;

const ScrollToTopButton = () => {
  const isHome = useIsHomePage();
  const { scrollY, viewportHeight, distanceFromBottom } = useScrollInfo();

  const show = scrollY > viewportHeight;
  const bottomOffset =
    distanceFromBottom < FOOTER_HEIGHT
      ? FOOTER_HEIGHT - distanceFromBottom + DEFAULT_BOTTOM_OFFSET
      : DEFAULT_BOTTOM_OFFSET;

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
