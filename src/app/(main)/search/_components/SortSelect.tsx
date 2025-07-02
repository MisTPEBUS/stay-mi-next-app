"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type FilterOption = {
  label: string;
  value: string;
  sort_by?: "price" | "date";
  sort_order?: "asc" | "desc";
};

const filterOptions: FilterOption[] = [
  { label: "推薦", value: "recommended" },
  { label: "最新", value: "latest", sort_by: "date", sort_order: "desc" },
  { label: "價格低到高", value: "priceLow", sort_by: "price", sort_order: "asc" },
  { label: "價格高到低", value: "priceHigh", sort_by: "price", sort_order: "desc" },
];

const SortSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(searchParams);

  const selectedValue =
    filterOptions.find((opt) => opt.sort_by === current.get("sort_by") && opt.sort_order === current.get("sort_order"))
      ?.value || "recommended";

  const handleChange = (value: string) => {
    const option = filterOptions.find((opt) => opt.value === value);
    if (!option) return;

    const updated = new URLSearchParams(current);
    if (option.sort_by) {
      updated.set("sort_by", option.sort_by);
      updated.set("sort_order", option.sort_order ?? "asc");
    } else {
      // 清除排序參數（推薦）
      updated.delete("sort_by");
      updated.delete("sort_order");
    }

    router.push(`?${updated.toString()}`);
  };

  return (
    <Select value={selectedValue} onValueChange={handleChange}>
      <SelectTrigger className="w-30">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {filterOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortSelect;
