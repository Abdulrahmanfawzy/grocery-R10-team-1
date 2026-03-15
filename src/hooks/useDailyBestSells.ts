import { getDailyBestSellsItems } from "@/lib/api/getDailyBestSellsItem";
import type { ProductsAPIResponse } from "@/types/home/product";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

const useDailyBestSells = (): UseQueryResult<ProductsAPIResponse> => {
  return useQuery({
    queryKey: ["home", "dailyBestSells"],
    queryFn: () => getDailyBestSellsItems(),
    staleTime: 1000 * 60 * 5,
  });
};

export default useDailyBestSells;
