import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DailyBestSellsForm from "../DailyBestSellsForm";
import ExpirationTimer from "./ExpirationTimer";
import useDailyBestSells from "@/hooks/useDailyBestSells";
import DailyBestSellsCard from "../DailyBestSellsCard";
import Loading from "../common/Loading";
import HomeAuthForm from "../DailyBestSellsForm";

const DailyBestSellsSection = () => {
  const { data, isLoading } = useDailyBestSells();
  const expiresAfter24Hours = Date.now() + 24 * 60 * 60 * 1000;

  const dailyBestSells = data ?? [];

  return (
    <section className="mb-18 space-y-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-start">
        <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
          Daily Best Sells
        </h2>

        <div className="self-start sm:self-auto">
          <ExpirationTimer expiresAt={expiresAfter24Hours} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_240px]">
        <div className="min-w-0">
          {isLoading ? (
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-gray-100">
              <Loading text="Please wait..." size={60} />
            </div>
          ) : dailyBestSells.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {dailyBestSells.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                  >
                    <div className="h-full">
                      <DailyBestSellsCard
                        image={product.image}
                        rating={product.rating}
                        price={18}
                        finalPrice={20}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2 flex" />
              <CarouselNext className="right-2 flex" />
            </Carousel>
          ) : (
            <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-gray-300 text-gray-500">
              No daily best sells found.
            </div>
          )}
        </div>

        <div className="w-full xl:w-[240px]">
          <HomeAuthForm />
        </div>
      </div>
    </section>
  );
};

export default DailyBestSellsSection;
