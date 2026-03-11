import CategoryCta from "@/components/Category/CategoryCta";
import CategoryMiniSlider from "@/components/Category/CategoryMiniSlider";
import CategorySearch from "@/components/Category/CategorySearch";
import CategorySlider from "@/components/Category/CategorySlider";
<<<<<<< HEAD
import { getCategories } from "@/lib/api/Categoty";
import { useEffect, useState } from "react";
=======

>>>>>>> aed336ec4dfefb25b2d5a40af8e63da8dbc8f886
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
<<<<<<< HEAD
      <CategorySlider categoryName="Meats" Items={categories} />
      <CategorySlider categoryName="Fruits" Items={categories} />
=======
      <CategorySlider categoryId={1} />
      <CategorySlider categoryId={2} />
      <CategorySlider categoryId={3} />
      <CategorySlider categoryId={4} />
>>>>>>> aed336ec4dfefb25b2d5a40af8e63da8dbc8f886
      <CategoryCta />
    </div>
  );
}
