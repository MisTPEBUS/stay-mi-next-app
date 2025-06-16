import React from "react";

import FilterCheckbox from "./FilterCheckbox";

type FilterSectionProps = {
  title: string;
  options: string[];
};

const FilterSection = ({ title, options }: FilterSectionProps) => {
  return (
    <div className="border-gray/50 border-b p-6">
      <p className="mb-5 font-bold">{title}</p>
      <div className="space-y-4">
        {options.map((option) => (
          <FilterCheckbox key={option} title={option} />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
