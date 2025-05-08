"use client";

import { Button } from "@/components/ui/button";
import { useAsPathStore } from "@/store/useAsPathStore";

const FacebookButton = () => {
  const { prevAsPath } = useAsPathStore((state) => state.asPath);

  const redirectToFacebook = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/users/facebook?redirectTo=${encodeURIComponent(
      prevAsPath
    )}`;
  };

  return (
    <Button
      type="button"
      onClick={redirectToFacebook}
      className="flex w-full items-center justify-start gap-3 rounded-lg bg-[#1877F2] px-4 py-2 text-white hover:bg-[#166FE5]"
    >
      <div className="relative flex size-9 items-center justify-center">
        <svg className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91V133.33c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0C141.09 0 89.09 54.42 89.09 153.33V195.3H0v92.7h89.09V512h107.88V288z" />
        </svg>
        <div className="size-8 bg-[#1877F2]"></div>
      </div>
      <p className="flex-1 border-l border-[#000000]/8 disabled:text-[#1E1E1E]/20">使用 Facebook 登入</p>

      {/*  <span className="text-sm font-medium">使用 Facebook 登入</span> */}
    </Button>
  );
};

export default FacebookButton;
