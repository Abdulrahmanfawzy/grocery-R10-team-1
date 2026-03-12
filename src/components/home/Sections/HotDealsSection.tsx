import CategoriesNavItems from "../common/CategoriesNavItems";

import useGetHotDeals from "@/hooks/useGetHotDeals";
import { useDispatch, useSelector } from "react-redux";
import { updateHotDeals } from "@/store/slices/homeSlice";
import type { RootState } from "@/store/store";
import HomeProductCarousel from "../common/HomeProductCarousel";

// the component start from here
const HotDealsSection = () => {
  const dispatch = useDispatch();
  const activeHotDeals = useSelector(
    (state: RootState) => state.home.activeHotDeals,
  );
  const { data, isLoading } = useGetHotDeals(Number(activeHotDeals));

  return (
    <section className="">
      {/* Header */}
      <div className="mb-4">
        <h2 className="m-0 text-[28px] font-semibold leading-tight text-gray-800 md:text-3xl">
          Hot Deals
        </h2>
        <div className="flex justify-end">
          <CategoriesNavItems
            activeCategory={activeHotDeals}
            onActiveCategory={(value) => dispatch(updateHotDeals(value))}
          />
        </div>
      </div>
      <HomeProductCarousel data={data || []} isLoading={isLoading} />
    </section>
  );
};

export default HotDealsSection;

// <div className="grid grid-cols-5 gap-4">

// </div>
