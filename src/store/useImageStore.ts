import { create } from "zustand";

type ImageType = {
  id: string;
  image_url: string;
  position: number;
};

type ImageStore = {
  images: ImageType[];
  setImages: (imgs: ImageType[]) => void;
  clearImages: () => void;
};

export const useImageStore = create<ImageStore>((set) => ({
  images: [],
  setImages: (imgs) => set({ images: imgs }),
  clearImages: () => set({ images: [] }),
}));
