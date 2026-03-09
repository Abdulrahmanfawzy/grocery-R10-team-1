import axiosInstance from "../Axios/axiosInstance";

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/api/categories");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
