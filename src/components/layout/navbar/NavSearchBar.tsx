import { categories } from "@/data/home/categories";
import { Search } from "lucide-react";
import { useState } from "react";

const NavSearchBar = () => {
  const [items, setItems] = useState("");

  return (
    <div className="flex items-center relative">
      {/* add select items */}
      <select
        name="All Categories"
        id="categories"
        className="bg-gray-200 py-[10px] px-2 rounded-l-md"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Search for Items..."
        value={items}
        onChange={(e) => setItems(e.target.value)}
        className="bg-gray-200 py-2 px-4 focus:outline-none focus:ring- focus:ring-main  w-64"
      />
      <button className="px-4 py-2 bg-primary text-white rounded-r-md ">
        <Search className="h-6 w-6" />
      </button>
    </div>
  );
};

export default NavSearchBar;
