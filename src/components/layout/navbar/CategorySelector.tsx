import { useCategory } from "@/hooks/useCategory";
import type { Dispatch, SetStateAction } from "react";

type CategorySelectorProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

const CategorySelector = ({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectorProps) => {
  const { categories } = useCategory();

  return (
    <select
      name="categories"
      id="categories"
      value={selectedCategory}
      onChange={(event) => setSelectedCategory(event.target.value)}
      className="bg-gray-200 text-md py-2 px-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Select Category"
    >
      <option value="all">All Categories</option>
      {categories.map((category) => (
        <option key={category.name} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
