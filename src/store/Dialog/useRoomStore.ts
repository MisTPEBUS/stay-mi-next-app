import { RoomPlanType } from "@/schema/dashboard/roomPlan.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useRoomDialogStore = createDialogStore<RoomPlanType>();
export const useRoomDeleteDialogStore = createDialogStore<RoomPlanType>();
