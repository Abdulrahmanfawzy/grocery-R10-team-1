import { useState } from "react";
import CategorySelector from "./CategorySelector";
import NavSearchBarInput from "./NavSearchBarInput";
import useSearchProducts from "@/hooks/useSearchProduct";
import SearchBarResult from "./SearchBarResult";
import type { ProductList } from "@/types/home/product";

const NavSearchBar = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("0");

  const { data, isLoading } = useSearchProducts(
    query,
    Number(selectedCategory),
  );

  const products = data?.data ?? [];
  const showResults = query.trim().length > 2;

  return (
    <div className="flex items-center relative">
      <CategorySelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NavSearchBarInput query={query} setQuery={setQuery} />
      {showResults && (
        <SearchBarResult
          products={products as ProductList}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default NavSearchBar;
