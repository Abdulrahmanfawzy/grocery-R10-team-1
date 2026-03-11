import { useEffect, type JSX, useState } from "react";
import { getCart } from "../lib/api/getcart.api";
import { deleteCartItem } from "../lib/api/deleteCartItem.api";
import { updateCartItem } from "../lib/api/updateCartItem.api";
import type { CartItem } from "../types/cart";
import { ProductSelector } from "../components/cart/ProductSelector";
import { OrderSummary } from "../components/cart/OrderSummary";
import { MoreToExplore } from "../components/cart/MoreToExplore";

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
<<<<<<< HEAD
=======

function QuantitySelector() {
  return (
    <div className="flex justify-between items-center border-1 w-[120px] md:w-[136px] border-[#BCB8B1] rounded-[10px] p-[8px]">
      {/* On mobile hide trash icon from quantity selector (shown at top-right instead) */}
      <span className="text-[#014162] text-[16px] font-bold md:hidden select-none">
        −
      </span>
      <GoTrash className="text-[#014162] text-[16px] hidden md:block" />
      <div className="text-[18px] font-[400] leading-[120%] text-[#0E1112]">
        2
      </div>
      <FaPlus className="text-[#014162] text-[16px]" />
    </div>
  );
}

function ProductSelector({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="w-full md:w-1/2 p-[16px]">
            <ProductItem product={product} />
          </div>
        );
      })}
    </>
  );
}


function ProductItem({ product }: { product: Product }) {
  return (
    <div className="w-full md:h-[130px] border-b border-[#BCB8B1] md:border-none pb-4 md:pb-0">
      <div className="flex items-start">
        {/* Image */}
        <div className="mr-[8px] flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-[100px] h-[100px] md:w-[80px] md:h-[80px] rounded-[8px] object-cover"
          />
          <div className="rounded-tl-[15px] rounded-br-[15px] bg-[#0E1112] text-white text-[12px] px-[8px] py-[4px] text-center mt-[8px]">
            In Stock
          </div>
        </div>

        {/* Info */}
        <div className="ml-[16px] flex-1">
          {/* Mobile: trash icon top-right */}
          <div className="flex justify-between items-start">
            <p className="text-[14px] font-medium line-clamp-2 flex-1 pr-2">
              {product.name}
            </p>
            <GoTrash className="text-[#014162] text-[18px] md:hidden flex-shrink-0" />
          </div>

          {/* Price: on mobile show prominently */}
          <div className="flex items-center gap-2 mt-[6px]">
            <span className="text-[16px] font-bold text-[#014162]">£33</span>
            <span className="text-[13px] text-[#BCB8B1] line-through">£40</span>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center mt-[10px]">
            <QuantitySelector />
            <div className="font-medium text-[15px] ml-5 hidden md:block">
              10 $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function OrderSummary() {
  return (
    <div className="flex justify-between mt-[32px]">
      <div className="w-1/3 ">
        <h2 className="mb-1">Total Amount</h2>
        <div className=" border-1 rounded-[10px] border-[#BCB8B1]">
          <div className="p-[16px]">
            <div className="flex justify-between">
              <p className="tex-[#6B6F75]">Subtotal</p>
              <p className="tex-[#6B6F75]">10 $</p>
            </div>
            <div className="flex justify-between">
              <p className="tex-[#6B6F75]">Shipping</p>
              <p className="tex-[#6B6F75]">10 $</p>
            </div>
            <div className="flex justify-between border-t-1 border-[#BCB8B1] mt-[10px] pt-[10px]">
              <p>Total</p>
              <p>10 $</p>
            </div>
            <button className="bg-[#014162] mt-[10px] text-white text-[12px] p-[8px] w-[150px] rounded-[10px]">
              Go To Checkout{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="mb-1">Delivery Details & Promo Code</h2>
        <div className=" border-1 rounded-[10px] border-[#BCB8B1] p-[16px]">
          <div className="flex items-center ">
            <img src={PromoIcon} alt="PromoIcon" className="mr-[8px]" />
            <p>Promo Code</p>
          </div>
          <div className="flex justify-between mt-[10px]">
            <input
              type="text"
              placeholder="   Save 10%"
              className="border-1 rounded-[6px] border-[#BCB8B1] w-[79px] placeholder-[#BCB8B1] placeholder:text-[#BCB8B1] text-[12px]"
            />
            <button className="bg-[#BCB8B1] text-white text-[12px] p-[8px] w-[150px] rounded-[10px]">
              Apply Code
            </button>
          </div>
          <h4 className="mt-[10px]">Delivery Address</h4>
          <div className="flex justify-between mt-[10px] ">
            <input
              type="text"
              placeholder="   Enter Promo Code"
              className="w-[70%] border-1 rounded-[6px] border-[#BCB8B1]  placeholder-[#BCB8B1] placeholder:text-[#BCB8B1] text-[12px]"
            />
            <button className="bg-[#BCB8B1] text-white text-[12px] p-[8px] w-[20%] rounded-[10px]  ">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreToExplore() {
  return (
    <div className="relative mt-[40px] md:mt-[100px] mx-auto w-full">
      <h2 className="text-[20px] md:text-[24px] font-[400] mb-5 leading-[120%] text-[#0E1112]">
        More To Explore
      </h2>
      <div className="absolute top-1/2 right-0 flex justify-between">
        <FaAngleRight className="text-[#014162] text-[30px]" />
      </div>
      <div className="absolute top-1/2 left-0 flex justify-between">
        <FaAngleLeft className="text-[#014162] text-[30px]" />
      </div>
      {/* Mobile: 2-column grid, Desktop: flex row */}
      <div className="grid grid-cols-2 gap-3 px-6 md:hidden">
        <ProductCard />
        <ProductCard />
      </div>
      <div className="hidden md:flex justify-evenly px-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="w-full md:w-[200px] md:h-[200px] border-1 rounded-[10px] border-[#BCB8B1] p-2 relative">
      <img
        src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=150&fit=crop"
        alt="Product"
        className="w-full h-[120px] object-cover rounded-[8px]"
      />
      {/* Heart icon on mobile */}
      <div className="absolute top-4 right-4 w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-sm">
        <span className="text-[#BCB8B1] text-[14px]">♡</span>
      </div>
      <p className="text-[12px] mt-1 line-clamp-1">Organic Apple - 1KG</p>
      <p className="text-[13px] font-bold text-[#014162]">£10</p>
    </div>
  );
}
>>>>>>> bbf3f16ab42448843989526e50d4f2d8431459a7
