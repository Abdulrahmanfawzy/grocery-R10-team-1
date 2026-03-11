import type { Product } from "@/types/home/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type HotDealsApiResponse = {
  data: Product[];
};

const API_URI = "https://grocery.newcinderella.online";
const token = "289|GDiGKQOmFgaQhjq6A8vPVLMqXUPheW2HHXxlBjwe4bcf13fe";

const getHotDeals = async (): Promise<Product[]> => {
  const response = await axios.get<HotDealsApiResponse>(`${API_URI}/api/meals/today`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

const useGetHotDeals = () => {
  const query = useQuery({
    queryKey: ["home", "hot-deals"],
    queryFn: getHotDeals,
    staleTime: 1000 * 60,
  });

  return query;
};

export default useGetHotDeals;
