import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { toast } from "sonner";

import { ImageUploadType, UploadApi } from "@/api/services/upload";

export const useUploadImageMutation = () => {
  return useMutation({
    mutationFn: async (file: File): Promise<string> => {
      const res: AxiosResponse<{ data: ImageUploadType }> = await UploadApi.ImageUpload(file);
      const url = res.data?.data?.image?.url;

      return url;
    },
    onSuccess: () => {},
    onError: (error) => {
      toast.error(`飯店更新失敗：${String(error)}`);
    },
  });
};
