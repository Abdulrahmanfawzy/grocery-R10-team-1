import { useCategory } from "@/hooks/useCategory";

const CategoriesNavItems = ({
  activeCategory,
  onActiveCategory,
}: {
  activeCategory: number;
  onActiveCategory: (category: string) => void;
}) => {
  const { categories } = useCategory();

  return (
    <select
      name="categories"
      id="categories"
      value={activeCategory}
      onChange={(event) => onActiveCategory(event.target.value)}
      className="bg-gray-200 text-md py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Select Category"
    >
      <option value="0">All Categories</option>
      {categories.map((category) => (
        <option key={category.name} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategoriesNavItems;
