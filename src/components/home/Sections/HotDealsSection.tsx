import { useState } from "react";
import hotDealsProducts from "@/data/home/hotDealsProducts";
import CategoriesNavItems from "../CategoriesNavItems";
import HomeProductCard from "../HomeProductCard";

const HotDealsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Vegetables");
  return (
    <section className="mb-16">
      {/* Header */}
      <div className="mb-4">
        <h2 className="m-0 text-[28px] font-semibold leading-tight text-gray-800 md:text-3xl">
          Hot Deals
        </h2>
        <CategoriesNavItems
          activeCategory={activeCategory}
          handleActiveCategory={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {hotDealsProducts.map((product) => (
          <HomeProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default HotDealsSection;
