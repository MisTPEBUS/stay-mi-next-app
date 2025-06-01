import { AxiosResponse } from "axios";

import { AxiosUploadClient } from "@/api/axios/axiosUploadClient";

type image = {
  url: string;
};

export type ImageUploadType = {
  image: image;
};
export type ImageUploadTypeA = {
  data: ImageUploadType;
};

export const UploadApi = {
  ImageUpload: async (file: File): Promise<AxiosResponse<{ data: ImageUploadType }>> => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await AxiosUploadClient.post<{ data: ImageUploadType }>("/upload", formData);

    return res;
  },
};
