import { Search } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type NavSearchBarInputProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};
const NavSearchBarInput = ({ query, setQuery }: NavSearchBarInputProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search for Items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-200 py-2 px-4 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-62 xl:w-72 2xl:w-84 relative rounded-r-md"
        aria-label="Search Items"
      />
      <button
        type="button"
        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors absolute right-0"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </>
  );
};

export default NavSearchBarInput;
