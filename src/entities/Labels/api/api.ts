import type { DetailResponseDto } from "@/shared/types/defaultApiSerializers";
import type { LabelRequestDto, LabelResponseDto } from "./types";
import { axiosInstance, type PaginationResponse } from "@/shared";

export const getLabels = async (search: string, page: number) => {
  const results = await axiosInstance.get<PaginationResponse<LabelResponseDto>>(
    "/api/tax/labels/",
    {
      params: {
        search: search,
        page: page,
      },
    },
  );

  return results.data;
};

export const getLabel = async (id: number) => {
  const results = await axiosInstance.get<LabelResponseDto>(
    `/api/tax/labels/${id}/`,
  );

  return results.data;
};

export const patchLabel = async (id: number, label: LabelRequestDto) => {
  const results = await axiosInstance.patch<LabelResponseDto>(
    `/api/tax/labels/${id}/`,
    {
      ...label,
    },
  );

  return results.data;
};

export const postLabel = async (label: LabelRequestDto) => {
  const results = await axiosInstance.post<LabelResponseDto>(
    "/api/tax/labels/new/",
    {
      ...label,
    },
  );

  return results.data;
};

export const deleteLabel = async (id: number) => {
  const results = await axiosInstance.delete<DetailResponseDto>(
    `/api/tax/labels/${id}/`,
  );

  return results.data;
};
