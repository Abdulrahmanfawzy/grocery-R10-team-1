import { searchOnProductByCategory } from "@/lib/api/product";
import { useQuery } from "@tanstack/react-query";

const useSearchProducts = (value: string, categoryId: number) => {
  return useQuery({
    queryKey: ["search", "product", value],
    queryFn: () => searchOnProductByCategory(categoryId, value),
    staleTime: 1000 * 60 * 5,
    enabled: value.length > 1,
  });
};

export default useSearchProducts;
