import CategoriesNavItems from "../common/CategoriesNavItems";
import HomeProductCarousel from "../common/HomeProductCarousel";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import useGetNewProducts from "@/hooks/useNewProducts";
import { updateNewProductsSelector } from "@/store/slices/homeSlice";

const NewProductSection = () => {
  const dispatch = useDispatch();
  const activeNewProducts = useSelector(
    (state: RootState) => state.home.activeNewProducts,
  );
  const { data, isLoading } = useGetNewProducts(Number(activeNewProducts));

  return (
    <section>
      {/* Header */}
      <div className="mb-4">
        <h2 className="m-0 text-[28px] font-semibold leading-tight text-gray-800 md:text-3xl">
          New Products
        </h2>
        <div className="flex justify-end">
          <CategoriesNavItems
            activeCategory={activeNewProducts}
            onActiveCategory={(value) =>
              dispatch(updateNewProductsSelector(value))
            }
          />
        </div>
      </div>
      <HomeProductCarousel data={data || []} isLoading={isLoading} />
    </section>
  );
};

export default NewProductSection;
