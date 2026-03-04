import type { MeatCategory } from "@/components/Types/Category";
import { calcDiscountedPrice } from "@/lib/utils/helperFn";
import { Plus, ShoppingCart, Trash2 } from "lucide-react";

export default function CategoryCard({ meat }: { meat: MeatCategory }) {
  console.log(meat);
  return (
    <div className="px-4 pt-15 pb-5   relative">
      <div className="absolute top-2 left-2 text-sm px-2 py-1 text-white flex gap-2">
        {meat.isNew ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            New
          </div>
        ) : null}
        {meat.inStock ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            in stock
          </div>
        ) : null}
        {meat.hasDiscount ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            {meat.discount}% off
          </div>
        ) : null}
      </div>
      <div className="flex justify-center">
        <img
          src={meat.image}
          alt={meat.name}
          className=" h-48 object-contain"
        />
      </div>
      <div className="flex justify-between mt-4">
        <h3 className=" font-medium text-xl ">{meat.name}</h3>
        {meat.hasDiscount ? (
          <div className="flex gap-2">
            <span className="font-medium text-xl">
              ${calcDiscountedPrice(meat.price, meat.discount)}
            </span>
            <span className="line-through text-gray-500 text-sm">
              $ {meat.price}
            </span>
          </div>
        ) : (
          <span className="font-medium text-xl">${meat.price}</span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500">⭐ {meat.rate}</span>
        <span className="text-gray-500 text-sm">({meat.rate})/5 </span>
      </div>
      <div className="mt-4 flex justify-between items-center gap-3">
        <button className="w-full bg-primary text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <ShoppingCart />
          Add to Cart
        </button>
        <button className="w-full border border-primary text-primary py-2 rounded-lg flex justify-between px-5">
          <button className="text-2xl">
            <Trash2 />
          </button>
          <span>1</span>
          <button className="text-2xl">
            <Plus />
          </button>
        </button>
      </div>
    </div>
  );
}
