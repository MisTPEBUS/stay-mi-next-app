import { ImageCreateType, ImageUpdateType } from "@/schema/dashboard/image.dto";

import { createDialogStore } from "./useDialogStoreType";

export const useImageDialogStore = createDialogStore<ImageCreateType>();
export const useImageDeleteDialogStore = createDialogStore<ImageUpdateType>();
