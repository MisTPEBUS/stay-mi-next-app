import { Eraser } from "lucide-react";

import FilterOptionsPanel from "./FilterOptionsPanel";

const FilterSideBar = () => {
  return (
    <div className="bg-white-pure hidden w-1/3 rounded-3xl md:block">
      <div className="border-gray/50 flex items-center justify-between border-b px-6 py-8">
        <span className="text-xl font-bold">透過以下分類搜尋</span>
        <div className="flex items-center">
          <Eraser className="m-1 size-5" />
          清空條件
        </div>
      </div>
      <FilterOptionsPanel />
    </div>
  );
};

export default FilterSideBar;
