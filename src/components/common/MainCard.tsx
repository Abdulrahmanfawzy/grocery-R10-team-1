import type { MeatCategory } from "@/components/Types/Category";
import type { Product } from "@/types/home/product";
import { calcDiscountedPrice, roundRating } from "@/lib/utils/helperFn";
import { Plus, ShoppingCart, Trash2 } from "lucide-react";
import Rating from "./Rating";

type CategoryCardItem = MeatCategory | Product;

export default function CategoryCard({ meat }: { meat: CategoryCardItem }) {
  const priceString = typeof meat.price === "number" ? String(meat.price) : meat.price;
  const isNew = "isNew" in meat ? meat.isNew : false;
  const inStock = "inStock" in meat ? meat.inStock : 0;
  const hasDiscount = "hasDiscount" in meat ? meat.hasDiscount : false;
  const discount = meat.discount ?? 0;
  const rate = "rate" in meat ? meat.rate : 0;

  return (
    <div className="px-4 pt-15 pb-5   relative">
      <div className="absolute top-2 left-2 text-sm px-2 py-1 text-white flex gap-2">
        {isNew ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            New
          </div>
        ) : null}
        {inStock ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            in stock
          </div>
        ) : null}
        {hasDiscount ? (
          <div className="bg-primary px-2 py-3 rounded-br-2xl rounded-tl-2xl">
            {discount}% off
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
        {hasDiscount ? (
          <div className="flex gap-2">
            <span className="font-medium text-xl">
              ${calcDiscountedPrice(priceString, discount)}
            </span>
            <span className="line-through text-gray-500 text-sm">
              $ {priceString}
            </span>
          </div>
        ) : (
          <span className="font-medium text-xl">${priceString}</span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="">{<Rating rating={roundRating(rate)} />}</span>
        <span className="text-gray-500 text-sm">({rate})/5 </span>
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
