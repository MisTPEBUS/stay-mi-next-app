import Link from "next/link";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { MobileNavProps } from "../../types";

const MobileNavbar = ({ isAuth, menuList, open, setOpen }: MobileNavProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left">
        <SheetHeader className="h-14 justify-center px-6">
          <SheetTitle className="text-2xl">Staymi</SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <ul className="px-6">
          {!isAuth && (
            <li className="mb-4" onClick={() => setOpen(false)}>
              <Link href="/login" className="text-primary border-gray flex h-14 items-center border-b font-bold">
                會員登入
              </Link>
            </li>
          )}
          {menuList.map((item) => (
            <li key={item.title} onClick={() => setOpen(false)}>
              <Link href={item.href} className="flex h-14 items-center font-bold">
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
