"use client";

import { Button } from "@/components/ui/button";

interface YearFilterProps {
  years: number[];
  selectedYear: number | null;
  onYearChange: (year: number | null) => void;
}

const YearFilter = ({ years, selectedYear, onYearChange }: YearFilterProps) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      <Button
        variant={selectedYear === null ? "default" : "outline"}
        size="sm"
        onClick={() => onYearChange(null)}
        className="rounded-full"
      >
        全部年度
      </Button>
      {years.map((year) => (
        <Button
          key={year}
          variant={selectedYear === year ? "default" : "outline"}
          size="sm"
          onClick={() => onYearChange(year)}
          className="rounded-full"
        >
          {year}年
        </Button>
      ))}
    </div>
  );
};

export default YearFilter;
