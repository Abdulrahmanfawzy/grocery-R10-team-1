import axiosInstance from "../../Axios/axiosInstance";

export const updateCartItem = async (meal_id: number, quantity: number) => {
  const response = await axiosInstance.put(`/api/cart/items/${meal_id}`, {
    quantity,
  });
  return response.data;
};
