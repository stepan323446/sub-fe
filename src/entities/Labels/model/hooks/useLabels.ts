import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../../api/api";
import { mapPaginatedDto } from "@/shared/utils";
import { mapLabelResponseDtoToModel } from "../mappers";

interface useLabelsAttr {
  search?: string;
  page?: number;
}

const useLabels = ({ search = "", page = 1 }: useLabelsAttr = {}) => {
  return useQuery({
    queryKey: ["labels", search, page],
    queryFn: () => getLabels(search, page),
    select: (res) => mapPaginatedDto(res, mapLabelResponseDtoToModel),
  });
};

export default useLabels;
