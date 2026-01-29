import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { LabelRequest } from "../types";
import { mapLabelModelToRequestDto } from "../mappers";
import { postLabel } from "../../api/api";
import { showAxiosErrorToast } from "@/shared/utils";

interface mutationFnAttrs {
  label: LabelRequest;
}

const usePostLabel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ label }: mutationFnAttrs) => {
      const labelDto = mapLabelModelToRequestDto(label);

      const dto = await postLabel(labelDto);
      return dto;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["labels"], exact: false });
    },
    onError: (err) => showAxiosErrorToast(err),
  });
};

export default usePostLabel;
