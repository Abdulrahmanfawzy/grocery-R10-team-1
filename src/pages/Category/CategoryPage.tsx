import CategoryCta from "@/components/Category/CategoryCta";
import CategoryMiniSlider from "@/components/Category/CategoryMiniSlider";
import CategorySearch from "@/components/Category/CategorySearch";
import CategorySlider from "@/components/Category/CategorySlider";
import { DummyMeatCategory } from "@/components/data/mocData";

export default function CategoryPage() {
  return (
    <div className="px-3">
      <CategorySearch />
      <CategoryMiniSlider />
      <CategorySlider categoryName="Meats" Items={DummyMeatCategory} />
      <CategorySlider categoryName="Fruits" Items={DummyMeatCategory} />
      <CategoryCta />
    </div>
  );
}
