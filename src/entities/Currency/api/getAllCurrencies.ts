import { axiosInstance } from "@/shared";
import type { CurrencyDto } from "./types";

const getAllCurrencies = async () => {
  const results = await axiosInstance.get<CurrencyDto[]>("/api/currencies/");

  return results.data;
};

export default getAllCurrencies;
