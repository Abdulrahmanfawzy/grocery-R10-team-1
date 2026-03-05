import BannersSection from "@/components/home/Sections/BannersSection";
// import DailyBestSellsSection from "@/components/home/Sections/DailyBestSellsSection";
import FeatureSection from "@/components/home/Sections/FeatureSection";
import HeroSection from "@/components/home/Sections/HeroSection";
import HotDealsSection from "@/components/home/Sections/HotDealsSection";
import NewProductSection from "@/components/home/Sections/NewProductSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto p-10">
        <HotDealsSection />
        <NewProductSection />
        <BannersSection />
        {/* <DailyBestSellsSection /> */}
        <FeatureSection />
      </div>
    </div>
  );
};

export default Home;
