import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Favorite from "@/components/profile/smartList/Favorite";
import List from "@/components/profile/smartList/List";
import CreateList from "@/components/profile/smartList/listDialog/CreateList";
import { Button } from "@/components/ui/button";
import { useGetFavorites } from "@/lib/api/profile/smartListApi/use-getFavorite";
import { useGetSmartList } from "@/lib/api/profile/smartListApi/use-getSmartList";
import { Plus } from "lucide-react";

const SmartList = () => {
  const { data, isLoading, isError } = useGetSmartList();
  const {
    data: favoritesData,
    isLoading: favoriteLoading,
    isError: favoriteError,
  } = useGetFavorites();

  if (isLoading || favoriteLoading) return <Loading />;

  if (isError || favoriteError)
    return <Error error={data.message || favoritesData.message} />;

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Smart Lists & Favorites
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Organize your shopping with custom lists
          </p>
        </div>
        <CreateList />
      </div>

      {/* Lists */}
      <List lists={data} />

      {/* Favorite Items */}
      <Favorite favorites={favoritesData} />

      {/* Archived */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="font-semibold text-card-foreground mb-1">
          Archived Lists
        </h2>
        <p className="text-sm text-muted-foreground mb-2">
          View and restore your archived shopping lists
        </p>
        <button className="text-sm text-primary font-medium hover:underline cursor-pointer">
          View Archived Lists (3)
        </button>
      </div>
    </>
  );
};

export default SmartList;
