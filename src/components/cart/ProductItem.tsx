import { GoTrash } from "react-icons/go";
import { QuantitySelector } from "./QuantitySelector";
import type { CartItem } from "../../types/cart";

export function ProductItem({
  item,
  onUpdateQuantity,
  onDelete,
}: {
  item: CartItem;
  onUpdateQuantity: (id: number, qty: number) => void;
  onDelete: (id: number) => void;
}) {
  console.log(item);
  return (
    <div className="w-full md:h-[130px] border-b border-[#BCB8B1] md:border-none pb-4 md:pb-0 relative">
      <div className="flex items-start relative">
        {/* Image */}
        <div className="mr-[8px] flex-shrink-0 relative">
          {item.meal.in_stock && (
            <div className=" absolute top-1 left-1 rounded-tl-[15px] rounded-br-[15px] bg-[#0E1112] text-white text-[12px] px-[8px] py-[4px] text-center ">
              {item.meal.in_stock ? "In Stock" : "Out of Stock"}
            </div>
          )}
          <img
            src={item.meal.image_url}
            alt={item.meal.title}
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[8px] object-cover"
          />
        </div>

        {/* Info */}
        <div className="ml-[16px] flex-1">
          {/* Mobile: trash icon top-right */}
          <div className="flex justify-between items-start">
            <p className="text-[14px] font-medium line-clamp-2 flex-1 pr-2">
              {item.meal.title}
            </p>
            <button
              onClick={() => onDelete(item.meal.id)}
              className="md:hidden flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full"
            >
              <GoTrash className="text-[#014162] text-[18px]" />
            </button>
          </div>

          {/* Price: on mobile show prominently */}
          <div className="flex items-center gap-2 mt-[6px]">
            <span className="text-[16px] font-bold text-[#014162]">
              £{item.meal.final_price.toFixed(2)}
            </span>
            {item.meal.discount_price !== null && (
              <span className="text-[13px] text-[#BCB8B1] line-through">
                £{item.meal.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center mt-[10px]">
            <QuantitySelector
              quantity={item.quantity}
              onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
              onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
            />
            <div className="font-medium text-[15px] ml-5 hidden md:block">
              £{item.subtotal.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Desktop Trash Button */}
        <button
          onClick={() => onDelete(item.id)}
          className="hidden md:flex absolute top-0 right-4 w-8 h-8 items-center justify-center hover:bg-gray-100 rounded-full"
        >
          <GoTrash className="text-[#014162] text-[18px]" />
        </button>
      </div>
    </div>
  );
}
