import axiosInstance from "@/lib/Axios/axiosInstance";
import type { Product } from "@/types/home/product";
import { useQuery } from "@tanstack/react-query";

type HotDealsApiResponse = {
  data: Product[];
};

const token = "289|GDiGKQOmFgaQhjq6A8vPVLMqXUPheW2HHXxlBjwe4bcf13fe";

const getNewProducts = async (categoryId: number): Promise<Product[]> => {
  if (categoryId === 0) {
    const response = await axiosInstance.get<HotDealsApiResponse>(
      `/api/meals/today`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.data;
  }
  const response = await axiosInstance.get<HotDealsApiResponse>(
    `/api/meals?category_id=${categoryId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data.data;
};

const useGetNewProducts = (categoryId: number) => {
  const query = useQuery({
    queryKey: ["home", "new-products", categoryId],
    queryFn: () => getNewProducts(categoryId),
    staleTime: 1000 * 60,
  });

  return query;
};

export default useGetNewProducts;
