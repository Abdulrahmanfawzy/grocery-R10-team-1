import type { ProductsAPIResponse } from "@/types/home/product";
import axiosInstance from "../Axios/axiosInstance";

const getProductByCategory = async (
  number: number,
): Promise<ProductsAPIResponse> => {
  const { data } = await axiosInstance.get(
    `api/meals?search=category_id=${number}`,
  );
  return data;
};

/**
 * Search On Product by passing the category and the Value
 * @param number
 * @param value
 * @returns
 */
const searchOnProductByCategory = async (
  categoryId: number,
  queryValue: string,
): Promise<ProductsAPIResponse> => {
  const url =
    categoryId != 0
      ? `api/meals?search=${queryValue}&category_id=${categoryId}`
      : `api/meals?search=${queryValue}`;
  const { data } = await axiosInstance.get(url);
  return data;
};

export { getProductByCategory, searchOnProductByCategory };
