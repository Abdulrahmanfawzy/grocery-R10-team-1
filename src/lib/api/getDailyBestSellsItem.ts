import type { ProductsAPIResponse } from "@/types/home/product";
import axiosInstance from "../Axios/axiosInstance";

const getDailyBestSellsItems = async (): Promise<ProductsAPIResponse> => {
  const { data } = await axiosInstance.get("/api/best-sells");
  return data.data;
};

export { getDailyBestSellsItems };
