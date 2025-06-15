import { ProductsType } from "@/schema/dashboard/product.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useProductDialogStore = createDialogStore<ProductsType>();
export const useProductDeleteDialogStore = createDialogStore<ProductsType>();
