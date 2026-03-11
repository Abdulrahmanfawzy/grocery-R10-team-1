import { useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiChevronRight, FiHeart } from "react-icons/fi";
import type { Product } from "./types";
import { useCart } from "../../hooks/useCart";

export function ProductInfo({ product }: { product: Product }) {
  const { addToCartHandler } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex-1 mt-[10px]">
      <h1 className="text-[24px] font-bold text-[#014162] mb-[20px]">
        {product.title}
      </h1>

      <div className="flex items-center gap-[10px] mb-[12px]">
        {product.discount_price !== null && (
          <span className="text-[13px] text-[#888888] line-through font-medium">
            £ {product.price}
          </span>
        )}
        <span className="text-[13px] text-[#888888] font-medium">
          | {product.size}
        </span>
      </div>

      <p className="text-[20px] font-semibold text-[#222222] mb-[24px]">
        £ {product.final_price}
      </p>

      <div className="inline-flex items-center gap-[8px] bg-[#E8E8E8] text-[#555555] text-[12.5px] font-medium px-[12px] py-[6px] rounded-md mb-[24px]">
        <MdOutlineLocalShipping size={16} />
        Priority Delivery Available
      </div>

      <div className="w-[300px] border-b border-[#E8E8E8] mb-[24px]"></div>

      <p className="text-[14px] text-[#222222] font-medium mb-[12px]">
        Quantity
      </p>
      <div className="flex items-center justify-between border border-[#014162] rounded-md w-[130px] px-[12px] py-[8px] mb-[24px]">
        <FaMinus
          className="text-[#014162] text-[15px] cursor-pointer"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        />
        <span className="text-[14px] font-semibold text-[#222222]">
          {quantity}
        </span>
        <FaPlus
          className="text-[#014162] text-[13px] cursor-pointer"
          onClick={() => setQuantity((q) => q + 1)}
        />
      </div>

      <div className="flex gap-[12px]">
        <button
          onClick={() => {
            addToCartHandler(product.id, quantity);
          }}
          className="flex items-center justify-center gap-[8px] bg-[#014162] text-white text-[14.5px] font-medium px-[28px] py-[10px] rounded-md hover:bg-[#01324c] transition-colors shadow-sm"
        >
          <BsCart3 size={17} /> Add To Cart <FiChevronRight size={17} />
        </button>
        <button className="flex items-center justify-center gap-[8px] bg-[#D4D4D4] text-[#444444] text-[14.5px] font-medium px-[24px] py-[10px] rounded-md hover:bg-[#C4C4C4] transition-colors shadow-sm">
          <FiHeart size={16} className="text-[#444444]" /> Add To Favorite
        </button>
      </div>
    </div>
  );
}
