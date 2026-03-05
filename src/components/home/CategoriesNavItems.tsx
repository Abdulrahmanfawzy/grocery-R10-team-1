import { categories } from "@/data/home/categories";

type Props = {
  activeCategory?: string;
  handleActiveCategory?: (category: string) => void;
};

const CategoriesNavItems = ({
  activeCategory,
  handleActiveCategory,
}: Props) => {
  return (
    <nav className="flex flex-wrap items-center gap-3 sm:justify-end ">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            type="button"
            className={`relative border-0 font-light bg-transparent px-1 py-1 text-md md:text-lg cursor-pointer text-gray-500 hover:text-slate-700 ${activeCategory === category.name ? "text-slate-800 font-bold" : ""}`}
            onClick={() =>
              handleActiveCategory && handleActiveCategory(category.name)
            }
          >
            {category.name}
          </button>
        );
      })}
    </nav>
  );
};

export default CategoriesNavItems;
