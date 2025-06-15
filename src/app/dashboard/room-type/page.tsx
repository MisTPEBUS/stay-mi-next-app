"use client";

import { RoomTypeDeleteDialog } from "./_components/RoomTypeDeleteDialog";
import { RoomTypeDialog } from "./_components/RoomTypeEditorDialog";
import { RoomTypeTable } from "./_components/RoomTypeTable";

const RoomTypePage = () => {
  return (
    <div className="bg-white-pure mx-4 rounded-sm border shadow">
      <RoomTypeTable />
      <RoomTypeDialog />
      <RoomTypeDeleteDialog />
    </div>
  );
};
export default RoomTypePage;
