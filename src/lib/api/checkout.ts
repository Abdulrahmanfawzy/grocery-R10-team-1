import axiosInstance from "../Axios/axiosInstance";

export async function getCard() {
  try {
    const {data} = await axiosInstance.get(`/api/cart`)
    return data;
  } catch (error) {
    console.error(error);
  }
}


export async function getAddresses() {
  try {
    const {data} = await axiosInstance.get(`/api/addresses`)
    return data;  

  } catch (error) {
    console.error( error);
  }
}


export async function checkout(formDataValues) {
  
    try {
    const formData = new FormData();

    Object.keys(formDataValues).forEach((key) => {
      formData.append(key, formDataValues[key]);
    });

    const { data } = await axiosInstance.post("api/orders", formData);

    return data;
  } catch (error) {
    console.error(error);
  }
}