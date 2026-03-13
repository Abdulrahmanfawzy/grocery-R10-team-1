import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Greeting from "@/components/profile/dashboard/Greeting";
import Orders from "@/components/profile/dashboard/Orders";
import RecentOrders from "@/components/profile/dashboard/RecentOrders";
import ShoppingInsight from "@/components/profile/dashboard/ShoppingInsight";
import TopPurchases from "@/components/profile/dashboard/TopPurchases";
import { useGetDashboard } from "@/lib/api/profile/dashboardApi/use-getDashboard";
import type { ProfileDataInterface } from "@/lib/types/Profile/Profile";
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const profileData = useOutletContext<ProfileDataInterface>();
  const { data, isLoading, isError } = useGetDashboard();

  if(isLoading)
    return <Loading/>
  if(isError)
    <Error error={data.message}/>
    
  return (
    <>
      <Greeting dashboardData={data.data} profileData={profileData} />
      <div className="my-8">
        <Orders dashboardData={data.data} />
      </div>
      <ShoppingInsight dashboardData={data.data} />
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-5">
        <RecentOrders dashboardData={data.data} />
        <TopPurchases dashboardData={data.data} />
      </div>
    </>
  );
};

export default Dashboard;
