export interface LabelResponseDto {
  id: number;
  name: string;
  colorHex: string;
  user: number;
  created_at: string;
  updated_at: string;
}
export interface LabelRequestDto {
  name: string;
  colorHex: string;
}
