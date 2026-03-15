import axiosInstance from "../Axios/axiosInstance";

export const deleteCartItem = async (meal_id: number) => {
  const response = await axiosInstance.delete(`/api/cart/items/${meal_id}`);
  return response.data;
};
