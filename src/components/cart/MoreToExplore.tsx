import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export function MoreToExplore() {
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
