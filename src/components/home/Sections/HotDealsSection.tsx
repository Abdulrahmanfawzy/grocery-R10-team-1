import { useEffect, useState } from "react";
import hotDealsProducts from "@/data/home/hotDealsProducts";
import CategoriesNavItems from "../CategoriesNavItems";
import HomeProductCard from "../HomeProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useGetHotDeals from "@/hooks/home/useGetHotDeals";

const HotDealsSection = () => {
  const { data } = useGetHotDeals();
  useEffect(() => {
    console.log(data);
  }, []);

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
      <div>
        <Carousel>
          <CarouselContent className="px-5">
            {hotDealsProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <HomeProductCard product={product} key={product.id} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default HotDealsSection;

// <div className="grid grid-cols-5 gap-4">

// </div>
