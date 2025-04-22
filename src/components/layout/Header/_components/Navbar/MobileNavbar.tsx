import Link from "next/link";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { NavProps } from "../../types";

const MobileNavbar = ({ menuList, open, setOpen }: NavProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left">
        <SheetHeader className="h-14 justify-center px-6">
          <SheetTitle className="text-2xl">Staymi</SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <ul>
          {menuList.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="flex h-14 items-center px-6">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
