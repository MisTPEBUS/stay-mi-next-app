"use client";
import { useEffect, useState } from "react";

export const useScrollInfo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setViewportHeight(window.innerHeight);
      setPageHeight(document.body.scrollHeight);
    };

    handleScroll(); // 頁面進入時初始化一次
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); //清除監聽
  }, []);

  const distanceFromBottom = pageHeight - (scrollY + viewportHeight);

  return { scrollY, viewportHeight, distanceFromBottom };
};
