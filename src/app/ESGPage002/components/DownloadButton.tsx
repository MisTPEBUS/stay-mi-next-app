"use client";

import { Download, Loader2, CheckCircle } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  downloadStatus: "idle" | "downloading" | "downloaded" | "complete";
  progress: number;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const DownloadButton = ({ downloadStatus, progress, onClick, className }: DownloadButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`relative w-32 overflow-hidden rounded-xl transition-all select-none ${
        downloadStatus === "downloading" ? "bg-primary/50 hover:bg-primary/50" : ""
      } ${downloadStatus !== "idle" ? "pointer-events-none" : ""} ${className ?? ""}`}
    >
      {downloadStatus === "idle" && (
        <>
          <Download className="mr-2 h-4 w-4" />
          下載
        </>
      )}

      {downloadStatus === "downloading" && (
        <div className="z-[5] flex items-center justify-center">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {progress}%
        </div>
      )}

      {downloadStatus === "downloaded" && (
        <>
          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
          已下載
        </>
      )}

      {downloadStatus === "complete" && (
        <>
          <Download className="mr-2 h-4 w-4" />
          下載
        </>
      )}

      {downloadStatus === "downloading" && (
        <div
          className="bg-primary absolute top-0 left-0 z-[3] h-full opacity-20 transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      )}
    </Button>
  );
};

export default DownloadButton;
