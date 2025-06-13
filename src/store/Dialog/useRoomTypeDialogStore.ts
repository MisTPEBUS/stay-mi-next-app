import { roomTypes } from "@/schema/dashboard/hotelRoomType.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useRoomTypeDialogStore = createDialogStore<roomTypes>();
export const useRoomTypeDeleteDialogStore = createDialogStore<roomTypes>();
