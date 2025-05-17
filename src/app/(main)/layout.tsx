import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { Suspense } from "react";

import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import PathTracker from "@/utils/pathTracker";
import { ReactQueryProvider } from "@/utils/reactQueryProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://staymi.vercel.app/"),
  title: { template: "%s | Staymi", default: "Staymi" },
  description: "不只是住一晚，是住進你的旅程裡。",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "staymi - 不只是住一晚，是住進你的旅程裡。" }],
  },
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default MainLayout;
