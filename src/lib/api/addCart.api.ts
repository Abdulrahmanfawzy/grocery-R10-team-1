import axiosInstance from "../Axios/axiosInstance";

export const addCart = async (meal_id: number, quantity: number) => {
  const response = await axiosInstance.post("/api/cart/items", {
    meal_id,
    quantity,
  });
  return response.data;
};
