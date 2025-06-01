import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { HotelBaseApi } from "@/api/services/dashboard/hotel/hotelBase";
import { CreateHotelSchemaType, HotelListSchemaType } from "@/schema/dashboard/hotelBase.dto";

type useCreateHotelMutationProps = {
  data: CreateHotelSchemaType;
  id?: string;
};

export const useHotelBase = () => {
  return useQuery<HotelListSchemaType>({
    queryKey: ["hotel-base"],
    queryFn: async () => {
      const res = await HotelBaseApi.getHotelBase();
      return res.data;
    },
    staleTime: 1000 * 60 * 2,
  });
};

export const useCreateHotelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data, id }: useCreateHotelMutationProps) => {
      const res = id
        ? await HotelBaseApi.updateHotelBase({ hotelInfo: data, id })
        : await HotelBaseApi.createHotelBase(data);
      return res.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["hotel-base"] });

      toast.success(variables.id ? "飯店更新成功" : "飯店建立成功");
    },
    onError: (error) => {
      toast.error(`飯店更新失敗：${String(error)}`);
    },
  });
};
