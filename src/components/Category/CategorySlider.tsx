import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CategoryCard from "../common/MainCard";
import { DummyMeatCategory } from "@/components/data/mocData";

export default function CategorySlider({
  categoryName,
  Items,
}: {
  categoryName: string;
  Items: typeof DummyMeatCategory;
}) {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <h2 className="text-lg font-semibold mb-4">{categoryName}</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-auto"
      >
        <CarouselContent>
          {Items.map((item, index) => (
            <CarouselItem key={index} className=" lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CategoryCard meat={item} />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
