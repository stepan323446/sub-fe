export interface Label {
  id: number;
  name: string;
  colorHex: string;
  user: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface LabelRequest {
  name: string;
  colorHex: string;
}
