import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";

const MotionError = () => {
  const router = useRouter();
  return (
    <motion.div
      className="bg-background container mx-auto my-40 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-destructive mb-4 text-3xl font-bold">載入失敗</h2>
      <p className="text-muted-foreground mb-6 text-lg">無法載入訂單資料，請確認 ID 是否存在。</p>
      <Button variant="outline" onClick={() => router.back()} className="rounded-md px-6 py-2">
        返回上一頁
      </Button>
    </motion.div>
  );
};

export default MotionError;
