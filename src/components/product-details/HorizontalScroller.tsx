import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ProductCard } from "./ProductCard";
import type { RelatedProduct } from "./types";

export function HorizontalScroller({
  products,
}: {
  products: RelatedProduct[];
}) {
  return (
    <div className="relative group/scroller">
      <button
        onClick={(e) => {
          const container = e.currentTarget.nextElementSibling;
          if (container) container.scrollBy({ left: -300, behavior: "smooth" });
        }}
        className="absolute left-[0px] top-1/2 -translate-y-1/2 -ml-[18px] z-10 w-[36px] h-[36px] rounded-full bg-white text-[#014162] border border-[#EEEEEE] flex items-center justify-center shadow-sm opacity-0 group-hover/scroller:opacity-100 transition-opacity"
      >
        <FiChevronLeft size={20} />
      </button>

      <div className="overflow-x-auto scroller-hide-scroll scroll-smooth flex gap-[16px] pb-[8px]">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <button
        onClick={(e) => {
          const container = e.currentTarget.previousElementSibling;
          if (container) container.scrollBy({ left: 300, behavior: "smooth" });
        }}
        className="absolute right-[0px] top-1/2 -translate-y-1/2 -mr-[18px] z-10 w-[36px] h-[36px] rounded-full bg-white text-[#014162] border border-[#EEEEEE] flex items-center justify-center shadow-sm opacity-0 group-hover/scroller:opacity-100 transition-opacity"
      >
        <FiChevronRight size={20} />
      </button>

      <style>{`
        .scroller-hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .scroller-hide-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
