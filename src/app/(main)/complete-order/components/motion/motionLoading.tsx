"use client";
import { motion } from "framer-motion";
import React from "react";

const MotionLoading = () => {
  return (
    <div className="bg-background container mx-auto my-40 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h2
          className="text-foreground mb-2 text-2xl font-semibold"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          載入中...
        </motion.h2>
        <p className="text-muted-foreground">正在取得資訊，請稍候。</p>
      </motion.div>
    </div>
  );
};

export default MotionLoading;
