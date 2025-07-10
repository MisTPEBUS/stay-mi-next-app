"use client";

import { motion } from "framer-motion";
import { Heart, Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type DownloadState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

const ESGReportDownload = () => {
  const [downloadState, setDownloadState] = useState<DownloadState>({ status: "idle" });

  const handleDownload = async () => {
    setDownloadState({ status: "loading" });

    try {
      await new Promise((res) => setTimeout(res, 2000));

      if (Math.random() > 0.3) {
        const pdf = new Blob(["ESG報告內容模擬"], { type: "application/pdf" });
        const url = URL.createObjectURL(pdf);
        const link = document.createElement("a");
        link.href = url;
        link.download = "ESG永續報告書-2024.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        setDownloadState({ status: "success", message: "報告書下載成功！" });
        setTimeout(() => setDownloadState({ status: "idle" }), 3000);
      } else {
        throw new Error();
      }
    } catch {
      setDownloadState({ status: "error", message: "下載失敗，請重新嘗試。" });
      setTimeout(() => setDownloadState({ status: "idle" }), 3000);
    }
  };

  return (
    <section
      id="report"
      className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20"
    >
      <div className="absolute top-20 right-20 h-40 w-40 rounded-full bg-emerald-200/30"></div>
      <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-blue-200/30"></div>
      <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-purple-200/30"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative z-10">
              <div className="absolute top-0 -left-6 h-full w-1 rounded-full bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500" />
              <h2 className="mb-6 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                下載我們的ESG報告書
              </h2>
              <div className="rounded-xl border border-white/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                <p className="mb-8 text-xl text-gray-700">
                  在我們的2024年ESG綜合報告書中，獲得我們永續發展績效、目標和成就的詳細洞察。
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&crop=center"
                alt="ESG報告書封面"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <Card
            className="group relative cursor-pointer overflow-hidden border-0 bg-white/90 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
            onClick={handleDownload}
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
            <div className="absolute right-0 bottom-0 h-32 w-32 rounded-tl-full bg-gradient-to-tl from-emerald-100 via-blue-100 to-purple-100 opacity-50 group-hover:opacity-70" />

            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-gray-800">
                  <div className="h-8 w-3 rounded-full bg-gradient-to-b from-emerald-500 to-blue-500" />
                  ESG永續報告書 2024
                </h3>
                <ul className="text-muted-foreground mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" /> 全面的永續發展指標
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" /> 第三方驗證數據
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" /> 未來永續發展路線圖
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" /> 利益相關者參與洞察
                  </li>
                </ul>
                <Badge variant="outline" className="text-sm">
                  PDF • 2.4 MB • 64頁
                </Badge>
              </div>

              <div className="z-50 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-blue-400 opacity-30 blur" />
                  <div className="relative rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 p-4">
                    <Heart className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="w-full rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 p-3 text-center font-medium text-white shadow-lg group-hover:shadow-xl">
                  <div className="flex items-center justify-center">
                    {downloadState.status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {downloadState.status === "success" && <CheckCircle className="mr-2 h-4 w-4" />}
                    {downloadState.status === "error" && <AlertCircle className="mr-2 h-4 w-4" />}
                    {downloadState.status === "idle" && <Download className="mr-2 h-4 w-4" />}
                    <span>
                      {downloadState.status === "loading" && "下載中..."}
                      {downloadState.status === "success" && "下載完成！"}
                      {downloadState.status === "error" && "重新下載"}
                      {downloadState.status === "idle" && "下載報告書"}
                    </span>
                  </div>
                </div>
                {downloadState.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-sm ${downloadState.status === "success" ? "text-green-600" : "text-red-600"}`}
                  >
                    {downloadState.message}
                  </motion.div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ESGReportDownload;
