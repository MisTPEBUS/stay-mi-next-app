"use client";

import { Calendar } from "lucide-react";
import { useState } from "react";

import ESGFooterInfo from "./components/ESGFooterInfo";
import ESGHero from "./components/ESGHero";
import ReportCard from "./components/ReportCard";
import YearFilter from "./components/YearFilter";
import { ESGReport } from "./type";

// Sample ESG Reports Data
const esgReports: ESGReport[] = [
  {
    id: "1",
    year: 2023,
    title: "2023年永續發展報告書",
    type: "永續報告書",
    fileSize: "15.2 MB",
    publishDate: "2024-06-15",
    language: "中英文",
    description: "本報告書詳細說明本公司2023年在環境、社會及治理方面的表現與成果。",
  },
  {
    id: "2",
    year: 2023,
    title: "2023年企業社會責任報告書",
    type: "CSR報告書",
    fileSize: "12.8 MB",
    publishDate: "2024-05-20",
    language: "中文",
    description: "展現企業在社會責任實踐上的具體行動與成效。",
  },
  {
    id: "3",
    year: 2022,
    title: "2022年永續發展報告書",
    type: "永續報告書",
    fileSize: "14.5 MB",
    publishDate: "2023-06-10",
    language: "中英文",
    description: "2022年度環境、社會及治理績效完整呈現。",
  },
  {
    id: "4",
    year: 2022,
    title: "2022年環境永續報告書",
    type: "環境報告書",
    fileSize: "8.9 MB",
    publishDate: "2023-04-25",
    language: "中文",
    description: "專注於環境保護與永續經營的專項報告。",
  },
  {
    id: "5",
    year: 2021,
    title: "2021年永續發展報告書",
    type: "永續報告書",
    fileSize: "13.7 MB",
    publishDate: "2022-06-08",
    language: "中英文",
    description: "2021年度ESG績效與永續發展策略說明。",
  },
  {
    id: "6",
    year: 2021,
    title: "2021年企業社會責任報告書",
    type: "CSR報告書",
    fileSize: "11.2 MB",
    publishDate: "2022-05-15",
    language: "中文",
    description: "企業社會責任實踐成果與未來規劃。",
  },
];

const ESGReportsPage = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [downloadStates, setDownloadStates] = useState<
    Record<string, { status: "idle" | "downloading" | "downloaded" | "complete"; progress: number }>
  >({});

  const availableYears = Array.from(new Set(esgReports.map((report) => report.year))).sort((a, b) => b - a);
  const filteredReports = selectedYear ? esgReports.filter((r) => r.year === selectedYear) : esgReports;
  const reportsByYear = filteredReports.reduce(
    (acc, report) => {
      if (!acc[report.year]) acc[report.year] = [];
      acc[report.year].push(report);
      return acc;
    },
    {} as Record<number, ESGReport[]>
  );

  const simulateDownload = (reportId: string) => {
    setDownloadStates((prev) => ({
      ...prev,
      [reportId]: { status: "downloading", progress: 0 },
    }));

    const interval = setInterval(() => {
      setDownloadStates((prev) => {
        const current = prev[reportId];
        if (current.progress >= 100) {
          clearInterval(interval);
          return { ...prev, [reportId]: { status: "downloaded", progress: 100 } };
        }
        return {
          ...prev,
          [reportId]: { ...current, progress: current.progress + 5 },
        };
      });
    }, 200);

    setTimeout(() => {
      setDownloadStates((prev) => ({
        ...prev,
        [reportId]: { status: "complete", progress: 100 },
      }));
    }, 5500);

    setTimeout(() => {
      setDownloadStates((prev) => ({
        ...prev,
        [reportId]: { status: "idle", progress: 0 },
      }));
    }, 5600);
  };

  const handleDownload = (reportId: string) => {
    const state = downloadStates[reportId];
    if (!state || state.status === "idle" || state.status === "complete") {
      simulateDownload(reportId);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="px-4 py-8">
        <ESGHero />

        <YearFilter years={availableYears} selectedYear={selectedYear} onYearChange={setSelectedYear} />

        <div className="container mx-auto max-w-6xl space-y-8">
          {Object.entries(reportsByYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, reports]) => (
              <div key={year}>
                <h2 className="text-foreground mb-4 flex items-center gap-2 text-2xl font-semibold">
                  <Calendar className="h-6 w-6" />
                  {year}年度報告書
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {reports.map((report) => (
                    <ReportCard
                      key={report.id}
                      report={report}
                      onDownload={handleDownload}
                      downloadStates={downloadStates}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="container mx-auto max-w-6xl py-12 text-center">
            <p className="text-muted-foreground">所選年度暫無可下載的報告書</p>
          </div>
        )}

        <ESGFooterInfo />
      </div>
    </div>
  );
};

export default ESGReportsPage;
