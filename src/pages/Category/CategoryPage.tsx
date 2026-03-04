import CategoryCta from "@/components/common/Category/CategoryCta";
import CategoryMiniSlider from "@/components/common/Category/CategoryMiniSlider";
import CategorySearch from "@/components/common/Category/CategorySearch";
import CategorySlider from "@/components/common/Category/CategorySlider";
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
