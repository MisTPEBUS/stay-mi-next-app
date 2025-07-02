import React from "react";

import FilterCheckbox from "./FilterCheckbox";

type FilterSectionProps = {
  title: string;
  name: string;
  options: string[];
  values: string[];
  onChange: (name: string, values: string[]) => void;
};

const FilterSection = ({ title, name, options, values, onChange }: FilterSectionProps) => {
  const handleToggle = (option: string) => {
    const newValues = values.includes(option) ? values.filter((val) => val !== option) : [...values, option];
    onChange(name, newValues);
  };

  return (
    <div className="border-gray/50 border-b p-6">
      <p className="mb-5 font-bold">{title}</p>
      <div className="space-y-4">
        {options.map((option) => (
          <FilterCheckbox
            key={option}
            title={option}
            checked={values.includes(option)}
            onChange={() => handleToggle(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
