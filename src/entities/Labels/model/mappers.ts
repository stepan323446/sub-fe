import type { LabelRequestDto, LabelResponseDto } from "../api/types";
import type { Label, LabelRequest } from "./types";

export const mapLabelResponseDtoToModel = (dto: LabelResponseDto): Label => ({
  id: dto.id,
  name: dto.name,
  colorHex: dto.colorHex,
  user: dto.user,
  createdAt: new Date(dto.created_at),
  updatedAt: new Date(dto.updated_at),
});

export const mapLabelModelToRequestDto = (
  label: LabelRequest,
): LabelRequestDto => ({
  name: label.name,
  colorHex: label.colorHex,
});
