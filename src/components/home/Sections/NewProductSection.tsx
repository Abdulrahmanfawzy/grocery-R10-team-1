import newProducts from "@/data/home/newProducts";
import CategoriesNavItems from "../CategoriesNavItems";
import { useState } from "react";
import HomeProductCard from "../HomeProductCard";

const NewProductSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Fruits");
  return (
    <section className="mb-16">
      <div className="mb-4">
        <h2 className="m-0 text-[28px] font-semibold leading-tight text-gray-800 md:text-3xl">
          New Products
        </h2>
        <CategoriesNavItems
          activeCategory={activeCategory}
          handleActiveCategory={setActiveCategory}
        />
      </div>

      <div>
        <div className="grid grid-cols-5 gap-4">
          {newProducts.map((product) => (
            <HomeProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProductSection;
