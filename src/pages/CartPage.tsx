import { useEffect, type JSX, useState } from "react";
import { getCart } from "../lib/api/getcart.api";
import { deleteCartItem } from "../lib/api/deleteCartItem.api";
import { updateCartItem } from "../lib/api/updateCartItem.api";
import type { CartItem } from "../types/cart";
import { ProductSelector } from "../components/cart/ProductSelector";
import { OrderSummary } from "../components/cart/OrderSummary";
import { MoreToExplore } from "../components/cart/MoreToExplore";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function CartPage(): JSX.Element {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCartData() {
    setIsLoading(true);
    try {
      const response = await getCart();
      console.log(response);
      setCartData(response.data.items);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCartData();
  }, []);

  const totalCartPrice = cartData.reduce(
    (total, item) => total + item.subtotal,
    0,
  );

  const handleUpdateQuantity = async (mealId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    // Optimistic UI update
    setCartData((prev) =>
      prev.map((item) => {
        if (item.meal.id === mealId) {
          const newSubtotal = item.unit_price * newQuantity;
          return { ...item, quantity: newQuantity, subtotal: newSubtotal };
        }
        return item;
      }),
    );

    try {
      await updateCartItem(mealId, newQuantity);
    } catch (error) {
      console.error("Failed to update cart item quantity", error);
      // Revert on failure (reload from server)
      getCartData();
    }
  };

  const handleDeleteItem = async (mealId: number) => {
    setCartData((prev) => prev.filter((item) => item.id !== mealId));

    try {
      await deleteCartItem(mealId);
    } catch (error) {
      console.error("Failed to delete cart item", error);
      getCartData();
    }
  };

  return (
    <>
      <div className="w-full md:w-[80%] max-w-7xl mx-auto md:px-8 mt-[136px] px-4 pb-[80px] md:pb-0">
        <h2 className="text-[20px] font-medium leading-1.5 tracking-normal text-[#014162]">
          <span className="text-[#BCB8B1]">Home/</span>Cart
        </h2>
        <div className="mt-[59px]">
          <h2 className="font-medium text-[20px] leading-1.5 text-[#0E1112]">
            Products in Cart
          </h2>
          <div className="mt-[20px] flex flex-wrap">
            {isLoading && cartData.length === 0 ? (
              <p>Loading cart...</p>
            ) : cartData.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ProductSelector
                products={cartData}
                onUpdateQuantity={handleUpdateQuantity}
                onDelete={handleDeleteItem}
              />
            )}
          </div>
        </div>
        {/* OrderSummary hidden on mobile, shown on md+ */}
        {cartData.length > 0 && (
          <div className="hidden md:block">
            <OrderSummary subtotal={totalCartPrice} />
          </div>
        )}
        <MoreToExplore />
        {/* Mobile-only fixed bottom bar */}
        {cartData.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#BCB8B1] p-4 flex items-center justify-between md:hidden z-50">
            <div>
              <p className="text-[12px] text-[#6B6F75]">Total</p>
              <p className="text-[18px] font-bold text-[#0E1112]">
                £{totalCartPrice.toFixed(2)}
              </p>
            </div>
            <button className="bg-[#014162] text-white text-[14px] font-medium py-[14px] px-[32px] rounded-[10px]">
              Continue To Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}


