export interface UserDto {
  id: number;
  username: string;
  email: string;
  limit: number;
  currency: number;
  is_monday_first: boolean;
  notification_email_enable: boolean;
  news_email_enable: boolean;
}

export interface UserUpdateDto {
  username: string;
  limit: number;
  currency: number;
  is_monday_first: boolean;
  notification_email_enable: boolean;
  news_email_enable: boolean;
}

export interface TokenObtainDto {
  access: string;
  refresh: string;
}
