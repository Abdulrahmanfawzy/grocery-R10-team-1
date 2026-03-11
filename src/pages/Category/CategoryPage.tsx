import CategoryCta from "@/components/Category/CategoryCta";
import CategoryMiniSlider from "@/components/Category/CategoryMiniSlider";
import CategorySearch from "@/components/Category/CategorySearch";
import CategorySlider from "@/components/Category/CategorySlider";
import { getCategories } from "@/lib/api/Categoty";
import { useEffect, useState } from "react";
export default function CategoryPage() {
const [categories, setCategories] = useState([]);

useEffect(() => {
  getCategories().then((data) => {
     console.log(data);
    setCategories(data.data);
  });
}, []);

  return (
    <div className="px-3">
      <CategorySearch />
      <CategoryMiniSlider />
      <CategorySlider categoryName="Meats" Items={categories} />
      <CategorySlider categoryName="Fruits" Items={categories} />
      <CategoryCta />
    </div>
  );
}
