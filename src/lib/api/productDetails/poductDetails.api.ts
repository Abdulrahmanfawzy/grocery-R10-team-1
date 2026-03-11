import axiosInstance from "../../Axios/axiosInstance";

export const getProductDetails = async (id: any) => {
  return await axiosInstance.get(`/api/meals/${id}`);
};
