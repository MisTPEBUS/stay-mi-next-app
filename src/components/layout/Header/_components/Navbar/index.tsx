import clsx from "clsx";
import Link from "next/link";

import { NavProps } from "../../types";

const Navbar = ({ menuList, className }: NavProps) => {
  return (
    <nav className="hidden h-full md:block">
      <ul className="z-10 flex h-full gap-2">
        {menuList.map((item) => (
          <li className="group relative" key={item.title}>
            <Link
              href={item.href}
              className={clsx(
                "hover:text-primary flex h-full items-center justify-center px-8 py-3 text-base font-bold transition-colors duration-300",
                className
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
