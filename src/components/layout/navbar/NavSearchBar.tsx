import { categories } from "@/lib/constants/dashboard/MockData";
import { Search } from "lucide-react";
import { useState } from "react";

const NavSearchBar = () => {
  const [items, setItems] = useState("");

  return (
    <div className="flex items-center relative">
      <select
        name="categories"
        id="categories"
        className="bg-gray-200 py-2.5 px-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Select Category"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search for Items..."
        value={items}
        onChange={(e) => setItems(e.target.value)}
        className="bg-gray-200 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary w-64"
        aria-label="Search Items"
      />
      <button
        type="button"
        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors"
        aria-label="Search"
      >
        <Search className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NavSearchBar;
