"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useAsPathStore } from "@/store/useAsPathStore";

const PathTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryString = Array.from(searchParams.entries())
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const asPath = pathname + "?" + queryString;

  const setAsPath = useAsPathStore((state) => state.setAsPath);

  useEffect(() => {
    setAsPath(asPath);
  }, [asPath, setAsPath]);

  return null;
};

export default PathTracker;
