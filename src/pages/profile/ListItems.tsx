import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import EmptyState from "@/components/profile/dashboard/EmptyState";
import Info from "@/components/profile/list-items/Info";
import { ItemCard } from "@/components/profile/list-items/ItemCard";
import { PageHeader } from "@/components/profile/list-items/PageHeader";
import { useGetFavorites } from "@/lib/api/profile/smartListApi/use-getFavorite";
import { useShowList } from "@/lib/api/profile/smartListApi/use-show-list";
import type { Datum } from "@/types/profile/smartList/ListTypes";
import { ShoppingBag } from "lucide-react";
import { useLocation } from "react-router-dom";

const ListItems = () => {
  const location = useLocation();
  const id: number = location.state.id;
  const { data, isLoading, isError } = useShowList(id);
  const {
    data: favoritesData,
    isLoading: favoriteLoading,
    isError: favoriteError,
  } = useGetFavorites();
  if (isLoading || favoriteLoading) return <Loading />;
  if (isError || favoriteError) return <Error error={data.message} />;
  const list: Datum = data.data;
  const favoriteItems = favoritesData.data

  return (
    <div className="bg-linear-to-b from-background via-background to-accent/5 overflow-hidden">
      <div>
        <div className="relative z-10">
          {/* Page Header */}
          <PageHeader
            listName={list.name}
            description={list.description}
            itemCount={list.meals.length}
          />

          {/* Info Banner Section */}
          <Info list={list} />

          {/* Items */}
          <div className=" ">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Featured Meals
              </h2>
              <p className="text-muted-foreground">
                Explore {list.meals.length} carefully selected dishes
              </p>
            </div>

            {list.meals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {list.meals.map((item, index) => (
                  <ItemCard key={item.id} item={item} index={index} favoriteItems={favoriteItems}/>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No items in your list yet"
                description="Start exploring and add your favorite meals!"
                icon={ShoppingBag}
                actionLabel="Go Shopping"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
