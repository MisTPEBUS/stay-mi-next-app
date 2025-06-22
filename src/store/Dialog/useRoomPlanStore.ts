import { RoomPlanType } from "@/schema/dashboard/roomPlan.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useRoomPlanDialogStore = createDialogStore<RoomPlanType>();
export const useRoomPlanDeleteDialogStore = createDialogStore<RoomPlanType>();
