import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

const Logo = ({ className, orientation = "horizontal" }: LogoProps) => {
  return (
    <>
      {orientation === "vertical" ? (
        <Link href="/" className="relative flex h-25 w-[110px] items-center justify-center md:w-30 md:justify-start">
          <Image src="/logo-v.svg" alt="staymi logo" className="object-contain md:-ms-1" fill />
        </Link>
      ) : (
        <Link
          href="/"
          className={twMerge("relative -mt-2 flex h-10 w-30 items-center justify-center py-2 md:mt-0", className)}
        >
          <Image src="/logo-h.svg" alt="staymi logo" className="object-contain" fill />
        </Link>
      )}
    </>
  );
};

export default Logo;
