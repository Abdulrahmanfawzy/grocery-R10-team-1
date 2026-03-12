import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeProductCard from "../HomeProductCard";
import type { Product } from "@/types/home/product";
import Loading from "./Loading";
import EmptyState from "./EmptyState";

const HomeProductCarousel = ({
  data = [],
  isLoading,
}: {
  data: Product[];
  isLoading: boolean;
}) => {
  // in case of loading
  if (isLoading) {
    return <Loading text="Please wait..." size={60} />;
  }

  if (data.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <Carousel>
        <CarouselContent className="px-5">
          {data?.map((product) => (
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
  );
};

export default HomeProductCarousel;
