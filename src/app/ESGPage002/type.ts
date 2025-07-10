export type DownloadStatus = "idle" | "downloading" | "downloaded" | "complete";

export type DownloadState = {
  status: DownloadStatus;
  progress: number;
};

export type ESGReport = {
  id: string;
  year: number;
  title: string;
  type: "永續報告書" | "CSR報告書" | "環境報告書";
  fileSize: string;
  publishDate: string;
  language: "中文" | "英文" | "中英文";
  description: string;
};

export type DownloadButtonProps = {
  downloadStatus: DownloadStatus;
  progress: number;
  onClick: () => void;
  className?: string;
};

export type ReportCardProps = {
  report: ESGReport;
  onDownload: (reportId: string) => void;
  downloadStates: Record<string, DownloadState>;
};

export type YearFilterProps = {
  years: number[];
  selectedYear: number | null;
  onYearChange: (year: number | null) => void;
};
