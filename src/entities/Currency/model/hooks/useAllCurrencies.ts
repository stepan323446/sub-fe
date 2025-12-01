import { useQuery } from "@tanstack/react-query";
import getAllCurrencies from "../../api/getAllCurrencies";
import { mapCurrencyDto } from "../mappers";

export const useAllCurrencies = () => {
  return useQuery({
    queryKey: ["all-currencies"],
    queryFn: getAllCurrencies,
    select: (data) => data.map(mapCurrencyDto),
  });
};

export default useAllCurrencies;
