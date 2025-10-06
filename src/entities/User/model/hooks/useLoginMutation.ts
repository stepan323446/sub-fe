import { useMutation, useQueryClient } from "@tanstack/react-query";
import postAuthLogin from "../../api/postAuthLogin";
import { mapTokenObtain } from "../mappers";
import { showAxiosErrorToast } from "@shared/utils";

interface mutationFnAttrs {
  email: string;
  password: string;
}

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }: mutationFnAttrs) => {
      const dto = await postAuthLogin({ email, password });

      return mapTokenObtain(dto);
    },
    onSuccess(data) {
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      queryClient.invalidateQueries({ queryKey: ["current-user"] });
    },
    onError: (err) => showAxiosErrorToast(err),
  });
};

export default useLoginMutation;
