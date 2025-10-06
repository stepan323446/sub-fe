export interface User {
  id: number;
  username: string;
  email: string;
  limit: number;
  currency: number;
  isMondayFirst: boolean;
  notificationEmailEnable: boolean;
  newsEmailEnable: boolean;
}

export interface TokenObtain {
  access: string;
  refresh: string;
}
