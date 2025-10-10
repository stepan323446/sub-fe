import type { CurrencyDto } from "../api/types";

export function mapCurrencyDto(dto: CurrencyDto) {
  return {
    id: dto.id,
    name: dto.name,
    code: dto.code,
    conversionRate: dto.conversion_rate,
  };
}
