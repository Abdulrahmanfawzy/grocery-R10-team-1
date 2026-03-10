import { type JSX } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart } from "../lib/api/getcart.api";
import { deleteCartItem } from "../lib/api/deleteCartItem.api";
import { updateCartItem } from "../lib/api/updateCartItem.api";
import type { CartItem } from "../types/cart";
import { ProductSelector } from "../components/cart/ProductSelector";
import { OrderSummary } from "../components/cart/OrderSummary";
import { MoreToExplore } from "../components/cart/MoreToExplore";

export default function CartPage(): JSX.Element {
  const queryClient = useQueryClient();

  // 1. Fetch Cart Data
  const {
    data: cartData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await getCart();
      // Ensure we return the items array
      return response.data.items as CartItem[];
    },
    staleTime: 1000 * 60 * 5,
  });

  // Calculate total price
  const totalCartPrice = cartData.reduce(
    (total, item) => total + item.subtotal,
    0,
  );

  // 2. Update Cart Item Quantity Mutation
  const updateQuantityMutation = useMutation({
    mutationFn: ({ mealId, quantity }: { mealId: number; quantity: number }) =>
      updateCartItem(mealId, quantity),
    onMutate: async ({ mealId, quantity }) => {
      // Cancel any outgoing refetches so they don't overwrite our optimistic update
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      // Snapshot the previous value
      const previousCart = queryClient.getQueryData<CartItem[]>(["cart"]);

      // Optimistically update to the new value
      if (previousCart) {
        queryClient.setQueryData<CartItem[]>(["cart"], (old) =>
          old?.map((item) => {
            if (item.meal.id === mealId) {
              const newSubtotal = item.unit_price * quantity;
              return { ...item, quantity, subtotal: newSubtotal };
            }
            return item;
          }),
        );
      }

      // Return a context object with the snapshotted value
      return { previousCart };
    },
    onError: (err, newTodo, context) => {
      // If the mutation fails, use the context returned from onMutate to roll back
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
      console.error("Failed to update cart item quantity", err);
    },
    onSettled: () => {
      // Always refetch after error or success to ensure we have correct data
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  // 3. Delete Cart Item Mutation
  const deleteItemMutation = useMutation({
    mutationFn: (mealId: number) => deleteCartItem(mealId),
    onMutate: async (mealId) => {
      await queryClient.cancelQueries({ queryKey: ["cart"] });

      const previousCart = queryClient.getQueryData<CartItem[]>(["cart"]);

      if (previousCart) {
        queryClient.setQueryData<CartItem[]>(["cart"], (old) =>
          old?.filter((item) => item.id !== mealId),
        );
      }

      return { previousCart };
    },
    onError: (err, id, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["cart"], context.previousCart);
      }
      console.error("Failed to delete cart item", err);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleUpdateQuantity = (mealId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantityMutation.mutate({ mealId, quantity: newQuantity });
  };

  const handleDeleteItem = (mealId: number) => {
    deleteItemMutation.mutate(mealId);
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
            {isLoading ? (
              <p>Loading cart...</p>
            ) : isError ? (
              <p>Failed to load cart.</p>
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
