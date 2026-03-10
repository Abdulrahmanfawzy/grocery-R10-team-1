import axiosInstance from "../Axios/axiosInstance";

export const getCart = async () => {
  const response = await axiosInstance.get("/api/cart");
  console.log(response.data);
  return response.data;
};
