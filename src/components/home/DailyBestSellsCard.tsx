import { ShoppingCart } from "lucide-react";
import Rating from "../common/Rating";
import { formatGBP } from "@/lib/utils/homePageFn";

const DailyBestSellsCard = ({
  image,
  rating,
  price,
  finalPrice,
}: {
  image: string;
  rating: number;
  price: number;
  finalPrice: number;
}) => {
  return (
    <div className="border border-gray-500">
      <div>
        <img
          src={image}
          alt={image}
          className="max-h-[110px] w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-1 flex flex-col gap-2">
        <div>
          <span className="text-sm text-gray-300">Meat</span>
          <h3>Hala Sasag 240g</h3>
        </div>
        <div>
          <Rating rating={rating} />

          <div className="text-[13px] text-gray-400">
            By <span className="font-medium text-[#0b3b60]">Mr.xoo</span>
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
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 text-[14px] px-4 py-2 rounded-md font-bold text-lg bg-[#0b3b60] text-white cursor-pointer"
        >
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DailyBestSellsCard;
