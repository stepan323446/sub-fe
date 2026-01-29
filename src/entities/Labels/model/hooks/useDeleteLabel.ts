import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteLabel } from "../../api/api";

const useDeleteLabel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const dto = await deleteLabel(id);
      return dto;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["labels"], exact: false });
    },
  });
};

export default useDeleteLabel;
