import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-[#014162]  text-primary-foreground relative">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto ">
        <div className=" py-12 px-10 flex-1  space-y-24">
          <div>
            <h1 className="text-[55px] max-w-[600px] font-semibold mb-6 text-balance leading-none">
              Don't miss our daily amazing deals.
            </h1>
            <p className="text-lg ">Save up to 60% off on your firs order</p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="px-12 text-[#253D4E] font-bold bg-[#D9D9D9] hover:bg-gray-300"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <div>
        <img
          src="/src/assets/home/hero-img.svg"
          alt="Hero Image"
          className="h-full hidden min-[1200px]:block object-cover z-1 absolute top-0 right-0"
        />
        <img
          src="/src/assets/home/banner/banner2.svg"
          alt="Hero Image"
          className="h-full hidden pt-24 min-[800px]:block min-[1000px]:pt-12 min-[1200px]:hidden  object-cover z-1 absolute top-0 right-0"
        />
      </div>
    </section>
  );
};
export default HeroSection;
