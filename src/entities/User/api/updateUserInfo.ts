import { axiosInstance } from "@/shared";
import type { UserDto, UserUpdateDto } from "./types";

const updateUserInfo = async ({
  username,
  limit,
  currency,
  is_monday_first,
  notification_email_enable,
  news_email_enable,
}: UserUpdateDto) => {
  const results = await axiosInstance.patch<UserDto>("/api/users/user-info/", {
    username,
    limit,
    currency,
    is_monday_first,
    notification_email_enable,
    news_email_enable,
  });

  return results.data;
};

export default updateUserInfo;
