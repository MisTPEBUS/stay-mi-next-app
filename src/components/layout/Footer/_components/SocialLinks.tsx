import Link from "next/link";
import React from "react";

import IconInstagram from "@/components/Icons/IconInstagram";
import IconLine from "@/components/Icons/IconLine";
import IconX from "@/components/Icons/IconX";

import { SocialLink } from "../types";

const SocialLinks: SocialLink[] = [
  {
    href: "#",
    icon: IconInstagram,
  },
  {
    href: "#",
    icon: IconLine,
  },
  {
    href: "#",
    icon: IconX,
  },
];

const SocialButton = () => {
  return (
    <div className="flex gap-4">
      {SocialLinks.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="flex size-10 items-center justify-center rounded-full border border-white transition-colors hover:bg-[#ffffff1A] active:border-2"
        >
          <item.icon className="size-5 text-white" />
        </Link>
      ))}
    </div>
  );
};

export default SocialButton;
