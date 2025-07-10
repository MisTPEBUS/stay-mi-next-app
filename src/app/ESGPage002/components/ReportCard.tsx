"use client";

import { Calendar, FileText, Building2, Leaf } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ESGReport } from "../type";

import DownloadButton from "./DownloadButton";

interface ReportCardProps {
  report: ESGReport;
  onDownload: (reportId: string) => void;
  downloadStates: Record<string, { status: "idle" | "downloading" | "downloaded" | "complete"; progress: number }>;
}

const ReportCard = ({ report, onDownload, downloadStates }: ReportCardProps) => {
  const downloadState = downloadStates[report.id] || { status: "idle", progress: 0 };

  // 封面圖樣式特例
  if (report.title === "2023年永續發展報告書") {
    return (
      <div className="group relative cursor-pointer" onClick={() => onDownload(report.id)}>
        <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop&crop=center"
            alt="2023年永續發展報告書封面"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          <div className="absolute right-4 bottom-4">
            <DownloadButton
              downloadStatus={downloadState.status}
              progress={downloadState.progress}
              onClick={() => onDownload(report.id)}
              className="shadow-md"
            />
          </div>
        </div>
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "永續報告書":
        return "bg-green-100 text-green-800 border-green-200";
      case "CSR報告書":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "環境報告書":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "永續報告書":
        return <Building2 className="h-4 w-4" />;
      case "CSR報告書":
        return <FileText className="h-4 w-4" />;
      case "環境報告書":
        return <Leaf className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Card className="transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-foreground mb-2 text-lg font-semibold">{report.title}</CardTitle>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="outline" className={`text-xs ${getTypeColor(report.type)}`}>
                {getTypeIcon(report.type)}
                <span className="ml-1">{report.type}</span>
              </Badge>
              <Badge variant="secondary" className="bg-amber-500 text-xs">
                {report.language}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{report.description}</p>
        <div className="text-muted-foreground mb-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{report.publishDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>{report.fileSize}</span>
            </div>
          </div>
        </div>
        <Separator className="mb-4" />
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground text-sm">PDF 格式 • {report.fileSize}</div>
          <DownloadButton
            downloadStatus={downloadState.status}
            progress={downloadState.progress}
            onClick={() => onDownload(report.id)}
            className="ml-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportCard;
