import type { ProductList } from "@/types/home/product";

type SearchBarResultProps = {
  products: ProductList | [];
  isLoading: boolean;
};

const SearchBarResult = ({ products, isLoading }: SearchBarResultProps) => {
  console.log(products);
  if (!products || products.length <= 0) {
    return (
      <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-md border border-gray-200 bg-white p-3 shadow-lg">
        <p
          className={`text-center  font-semibold ${isLoading ? "text-primary" : "text-red-900"}`}
        >
          {isLoading ? "Loading..." : "No Data valid"}
        </p>
      </div>
    );
  }

  return (
    <div className="absolute left-0 top-full z-10 mt-2 max-h-72 w-full overflow-y-auto rounded-md border border-gray-200 bg-white p-2 shadow-lg">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-3 rounded-md p-2 hover:bg-gray-50"
        >
          <img
            src={item.image_url}
            alt={item.title}
            className="h-12 w-12 rounded-md object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">{item.category?.name}</p>
          </div>
          <p className="text-sm font-semibold text-primary">
            ${Number(item.final_price).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchBarResult;
