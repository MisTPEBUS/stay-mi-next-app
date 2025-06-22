import { OrderRoomProductType } from "@/schema/dashboard/order.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useProductDialogStore = createDialogStore<OrderRoomProductType>();
