import { type JSX } from "react";
import { getCart } from "../lib/api/Cart/getcart.api";
import { deleteCartItem } from "../lib/api/Cart/deleteCartItem.api";
import { updateCartItem } from "../lib/api/Cart/updateCartItem.api";
import { ProductSelector } from "../components/cart/ProductSelector";
import { OrderSummary } from "../components/cart/OrderSummary";
import { MoreToExplore } from "../components/cart/MoreToExplore";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function CartPage(): JSX.Element {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 10000,
  });
  const cartData = data?.data?.items || [];
  const subtotal = data?.data?.subtotal;
  const total = data?.data?.total;

  const handleUpdateQuantity = async (mealId: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    try {
      console.log("Cart item quantity updated successfully");
      await updateCartItem(mealId, newQuantity);
    } catch (error) {
      console.error("Failed to update cart item quantity", error);
    }
  };

  const handleDeleteItem = async (mealId: number) => {
    try {
      await deleteCartItem(mealId);
    } catch (error) {
      console.error("Failed to delete cart item", error);
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
            <OrderSummary subtotal={subtotal} total={total} />
          </div>
        )}
        <MoreToExplore />
        {/* Mobile-only fixed bottom bar */}
        {cartData.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#BCB8B1] p-4 flex items-center justify-between md:hidden z-50">
            <div>
              <p className="text-[12px] text-[#6B6F75]">Total</p>
              <p className="text-[18px] font-bold text-[#0E1112]">
                £{data?.total}
              </p>
            </div>
            <Link
              to="/checkout-1"
              className="bg-[#014162] text-white text-[14px] font-medium py-[14px] px-[32px] rounded-[10px]"
            >
              Continue To Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
