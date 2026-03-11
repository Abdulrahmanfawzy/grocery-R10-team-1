import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { addCart } from "../lib/api/Cart/addCart.api";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const addToCartHandler = async (meal_id: number, quantity: number = 1) => {
    try {
      const response = await addCart(meal_id, quantity);
      console.log(response);
      dispatch(addToCart(response));
    } catch (error) {
      console.error(error);
    }
  };

  return { addToCartHandler };
};
