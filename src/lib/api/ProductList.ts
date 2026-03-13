import axiosInstance from "../Axios/axiosInstance";



export async function getProductCard() {
  try {
    const {data} = await axiosInstance.get(`/api/meals`)
    return data;
  } catch (error) {
    console.error(error);
  }
}


