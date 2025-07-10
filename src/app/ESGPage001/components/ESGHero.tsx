"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const ESGHero = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  // 避免 SSR hydration mismatch，需延遲動畫初始化
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.section
      id="hero"
      className="relative flex h-[70vh] items-center justify-center overflow-hidden"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/15 to-purple-500/20" />

      <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-emerald-400/30 blur-xl"></div>
      <div className="absolute right-10 bottom-20 h-40 w-40 rounded-full bg-blue-400/30 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-purple-400/30 blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/2 h-36 w-36 rounded-full bg-pink-400/20 blur-xl"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=300&fit=crop&crop=center"
              alt="永續發展森林景觀"
              className="mx-auto mb-6 w-full max-w-xl rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-20 blur"></div>
            <h1 className="relative mb-4 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              ESG 永續卓越
            </h1>
          </div>
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg md:text-xl">
            透過環境責任、社會影響力和強健治理，共同建構永續未來
          </p>
          <Button size="lg" aria-label="了解更多ESG倡議" asChild>
            <a href="#overview" className="group">
              <span className="flex items-center">
                了解更多
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </span>
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ESGHero;
