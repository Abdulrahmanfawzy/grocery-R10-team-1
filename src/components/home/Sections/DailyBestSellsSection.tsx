import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DailyBestSellsForm from "../DailyBestSellsForm";
import ExpirationTimer from "./ExpirationTimer";
// import HomeProductCard from "../HomeProductCard";
import useDailyBestSells from "@/hooks/useDailyBestSells";
import DailyBestSellsCard from "../DailyBestSellsCard";

const DailyBestSellsSection = () => {
  const { data } = useDailyBestSells();

  const dailyBestSells = data?.data ?? [];

  return (
    <section className="space-y-8">
      <div className="flex justify-start items-center gap-4">
        <h2 className="text-3xl font-semibold  text-gray-800 ">
          Daily Best Sells
        </h2>
        <ExpirationTimer />
      </div>
      <div className=" md:flex items-center ">
        <div>
          <Carousel>
            <CarouselContent className="px-5">
              {dailyBestSells.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <DailyBestSellsCard
                    image={product.image}
                    rating={product.rating}
                    price={18}
                    finalPrice={20}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <DailyBestSellsForm />
      </div>
    </section>
  );
};

export default DailyBestSellsSection;
