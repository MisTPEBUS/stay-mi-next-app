import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { Suspense } from "react";

import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PathTracker from "@/utils/pathTracker";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["500", "100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Staymi",
  description: "不只是住一晚，是住進你的旅程裡。",
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "staymi - 不只是住一晚，是住進你的旅程裡。" }],
  },
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="zh">
      <body
        className={`${notoSansTC.variable} ${notoSansTC.className} flex min-h-screen flex-col bg-white antialiased`}
      >
        <Suspense fallback={null}>
          <PathTracker />
        </Suspense>
        <Header />
        <main className="flex-1">{children}</main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
