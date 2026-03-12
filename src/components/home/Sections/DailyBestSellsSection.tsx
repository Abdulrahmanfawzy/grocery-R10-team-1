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
import Loading from "../common/Loading";

const DailyBestSellsSection = () => {
  const { data, isLoading } = useDailyBestSells();
  const expiresAfter24Hours = Date.now() + 24 * 60 * 60 * 1000;

  const dailyBestSells = data ?? [];

  return (
    <section className="space-y-16 mb-18">
      <div className="flex justify-start items-center gap-4">
        <h2 className="text-3xl font-semibold  text-gray-800 ">
          Daily Best Sells
        </h2>
        <ExpirationTimer expiresAt={expiresAfter24Hours} />
      </div>
      <div className=" flex-col md:flex-row flex flex-wrap justify-between items-center">
        {isLoading ? (
          <div className="w-full text-center">
            <Loading text="Please wait..." size={60} />
          </div>
        ) : (
          <div>
            <Carousel>
              <CarouselContent>
                {data?.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
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
        )}
        <DailyBestSellsForm />
      </div>
    </section>
  );
};

export default DailyBestSellsSection;
