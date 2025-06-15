"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onChange }: PaginationProps) => {
  const handlePageClick = (page: number) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onChange(page);
    }
  };

  const renderPages = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      // 全部顯示
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const showLeftEllipsis = currentPage > 4;
      const showRightEllipsis = currentPage < totalPages - 3;

      pages.push(1); // always show first

      if (showLeftEllipsis) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (showRightEllipsis) pages.push("...");

      pages.push(totalPages); // always show last
    }

    return pages.map((p, index) =>
      p === "..." ? (
        <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
          ...
        </span>
      ) : (
        <button
          key={p}
          onClick={() => handlePageClick(p)}
          className={cn(
            "rounded px-3 py-1 text-sm font-medium transition",
            p === currentPage ? "bg-primary text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          )}
        >
          {p}
        </button>
      )
    );
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "rounded px-2 py-1 text-sm",
          currentPage === 1 ? "cursor-not-allowed text-gray-400" : "text-gray-800 hover:bg-gray-200"
        )}
      >
        <ChevronLeft size={16} />
      </button>

      {renderPages()}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "rounded px-2 py-1 text-sm",
          currentPage === totalPages ? "cursor-not-allowed text-gray-400" : "text-gray-800 hover:bg-gray-200"
        )}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Pagination;
