import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateUserInfo from "../../api/updateUserInfo";
import { showAxiosErrorToast } from "@/shared/utils";

interface mutationFnAttrs {
  username: string;
  limit: number;
  currency: number;
  isMondayFirst: boolean;
  notificationEmailEnable: boolean;
  newsEmailEnable: boolean;
}

export const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      username,
      limit,
      currency,
      isMondayFirst,
      notificationEmailEnable,
      newsEmailEnable,
    }: mutationFnAttrs) => {
      const result = await updateUserInfo({
        username,
        limit,
        currency,
        is_monday_first: isMondayFirst,
        notification_email_enable: notificationEmailEnable,
        news_email_enable: newsEmailEnable,
      });
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
    onError: (err) => showAxiosErrorToast(err),
  });
};
