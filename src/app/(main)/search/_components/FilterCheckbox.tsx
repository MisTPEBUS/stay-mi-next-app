import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FilterCheckboxProps = {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const FilterCheckbox = ({ title, checked, onChange }: FilterCheckboxProps) => {
  return (
    <div className="flex items-center gap-4">
      <Checkbox id={title} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={title} className="text-base">
        {title}
      </Label>
    </div>
  );
};

export default FilterCheckbox;
