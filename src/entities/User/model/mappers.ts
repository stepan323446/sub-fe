import type { TokenObtainDto, UserDto } from "../api/types";
import type { TokenObtain, User } from "./types";

export const mapUserDto = (dto: UserDto): User => ({
  id: dto.id,
  username: dto.username,
  email: dto.email,
  limit: dto.limit,
  currency: dto.currency,
  isMondayFirst: dto.is_monday_first,
  notificationEmailEnable: dto.notification_email_enable,
  newsEmailEnable: dto.news_email_enable,
});

export const mapTokenObtain = (dto: TokenObtainDto): TokenObtain => ({
  access: dto.access,
  refresh: dto.refresh,
});
