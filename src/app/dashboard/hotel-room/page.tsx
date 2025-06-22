"use client";

import { HotelRoomDeleteDialog } from "./_components/HotelRoomDeleteDialog";
import { HotelRoomEditorDialog } from "./_components/HotelRoomEditorDialog";
import { HotelRoomTable } from "./_components/HotelRoomTable";

const HotelRoom = () => {
  return (
    <div className="bg-white-pure mx-4 rounded-sm border shadow">
      <HotelRoomTable />
      <HotelRoomEditorDialog />
      <HotelRoomDeleteDialog />
    </div>
  );
};
export default HotelRoom;
