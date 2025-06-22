import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FilterCheckboxProps = {
  title: string;
};

const FilterCheckbox = ({ title }: FilterCheckboxProps) => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox id={title} />
      <Label htmlFor={title} className="text-base">
        {title}
      </Label>
    </div>
  );
};

export default FilterCheckbox;
