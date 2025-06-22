"use client";

import { RoomPlanDeleteDialog } from "./_components/RoomPlanDeleteDialog";
import { RoomPlanDialog } from "./_components/RoomPlanEditorDialog";
import { RoomPlanTable } from "./_components/RoomPlanTable";

const RoomPlanPage = () => {
  return (
    <div className="bg-white-pure mx-4 rounded-sm border shadow">
      <RoomPlanTable />
      <RoomPlanDialog />
      <RoomPlanDeleteDialog />
    </div>
  );
};
export default RoomPlanPage;
