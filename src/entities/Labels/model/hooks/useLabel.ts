import { useQuery } from "@tanstack/react-query";
import { getLabel } from "../../api/api";
import { mapLabelResponseDtoToModel } from "../mappers";

const useLabel = (id: number) => {
  return useQuery({
    queryKey: ["label", id],
    queryFn: () => getLabel(id),
    select: mapLabelResponseDtoToModel,
  });
};

export default useLabel;
