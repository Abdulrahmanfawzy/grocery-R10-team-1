import { calcFinalPrice, formatGBP } from "@/lib/utils/homePageFn";
import Stars from "../common/Star";
import type { Product } from "@/types/home/product";
import { ShoppingCart } from "lucide-react";

const HomeProductCard = ({ product }: { product: Product }) => {
  const { name, category, rating, owner, image, price, discount } = product;
  const finalPrice = calcFinalPrice(price, discount);
  return (
    <div className="flex flex-col gap-2 rounded-[10px] border border-gray-100 bg-white p-4 ">
      <div className="grid h-[120px] place-items-center rounded-[10px] bg-white">
        <img
          src={image}
          alt={name}
          className="max-h-[110px] w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="mt-1 text-[13px] text-gray-400">{category}</div>

        <h3
          className="m-0 truncate text-[18px] font-ligt text-slate-900"
          title={name}
        >
          {name}
        </h3>

        <div>
          <Stars value={rating} />

          <div className="text-[13px] text-gray-400">
            By <span className="font-medium text-[#0b3b60]">{owner}</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3 ">
          <div className="flex items-baseline gap-2">
            <span className="text-[18px] font-bold text-[#0b3b60]">
              {formatGBP(finalPrice)}
            </span>
            <span className="text-[14px] text-gray-400 line-through">
              £{price.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1 text-[14px] px-4 py-1 rounded-md bg-[#0b3b60] text-white"
          >
            <ShoppingCart size={12} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
