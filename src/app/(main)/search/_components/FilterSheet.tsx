import { Eraser } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import FilterOptionsPanel from "./FilterOptionsPanel";

type FilterSheetProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const FilterSheet = ({ open, setOpen }: FilterSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom">
        <SheetHeader className="h-14 justify-center px-6">
          <SheetTitle className="text-2xl">透過以下分類搜尋</SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto">
          <FilterOptionsPanel />
        </div>
        <div className="flex flex-col items-center gap-2 p-6">
          <SheetClose asChild>
            <Button className="w-full">套用</Button>
          </SheetClose>
          <div className="flex items-center">
            <Eraser className="m-1 size-5" />
            清空條件
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSheet;
