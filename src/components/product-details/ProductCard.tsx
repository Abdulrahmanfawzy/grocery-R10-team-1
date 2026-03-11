import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { Badge } from "./Badge";
import { StarRow } from "./StarRow";
import type { RelatedProduct } from "./types";

export function ProductCard({ product }: { product: RelatedProduct }) {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex-shrink-0 w-[240px] border border-[#EEEEEE] rounded-[10px] p-[16px] bg-white flex flex-col justify-between hover:shadow-sm transition-shadow">
      <div>
        <div className="relative">
          <div className="absolute top-[px] left-[8px] flex gap-[6px] flex-wrap z-10 max-w-[95%]">
            {product.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[180px] object-cover rounded-[8px] mb-[12px]"
          />
        </div>
        <div className="flex justify-between items-start mb-[4px]">
          <p className="text-[14.5px] font-medium text-[#222222] line-clamp-1 w-[60%]">
            {product.name}
          </p>
          <div className="flex items-center gap-[6px]">
            <span className="text-[13.5px] font-bold text-[#222222]">
              £ {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-[11.5px] line-through text-[#AAAAAA]">
                £ {product.oldPrice}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-[6px] mb-[18px]">
          <StarRow rating={product.rating} size={11.5} />
          <span className="text-[10.5px] text-[#AAAAAA]">
            Rating ({product.reviews}/5)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[8px]">
        <button className="flex-1 flex items-center justify-center gap-[6px] bg-[#014162] text-white text-[12.5px] font-medium rounded-md py-[8px] hover:bg-[#01324c] transition-colors">
          <BsCart3 size={14} /> Add To Cart
        </button>
        <div className="flex items-center justify-between border border-[#014162] rounded-md px-[8px] py-[7px] w-[75px]">
          <GoTrash
            className="text-[#014162] text-[13px] cursor-pointer"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          />
          <span className="text-[12.5px] font-semibold text-[#222222]">
            {qty}
          </span>
          <FaPlus
            className="text-[#014162] text-[10px] cursor-pointer"
            onClick={() => setQty((q) => q + 1)}
          />
        </div>
      </div>
    </div>
  );
}
