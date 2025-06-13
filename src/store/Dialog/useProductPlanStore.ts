import { ProductPlanType } from "@/schema/dashboard/productPlan.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useProductPlanDialogStore = createDialogStore<ProductPlanType>();
export const useProductPlanDeleteDialogStore = createDialogStore<ProductPlanType>();
