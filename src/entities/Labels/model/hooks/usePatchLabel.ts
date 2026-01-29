import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { LabelRequest } from "../types";
import { mapLabelModelToRequestDto } from "../mappers";
import { patchLabel } from "../../api/api";
import { showAxiosErrorToast } from "@/shared/utils";

interface mutationFnAttrs {
  id: number;
  label: LabelRequest;
}

const usePatchLabel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, label }: mutationFnAttrs) => {
      const labelDto = mapLabelModelToRequestDto(label);

      const dto = await patchLabel(id, labelDto);
      return dto;
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["labels"], exact: false });
      queryClient.invalidateQueries({ queryKey: ["label", id] });
    },
    onError: (err) => showAxiosErrorToast(err),
  });
};

export default usePatchLabel;
