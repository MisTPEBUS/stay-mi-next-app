import { usePathname } from "next/navigation";

export const useIsHomePage = () => {
  const pathname = usePathname();
  return pathname === "/";
};
