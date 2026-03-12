import Error from "@/components/common/Error";
import Loading from "@/components/common/Loading";
import Coupons from "@/components/profile/loyalty/Coupons";
import Membership from "@/components/profile/loyalty/Membership";
import { Button } from "@/components/ui/button";
import { useGetDashboard } from "@/lib/api/profile/dashboardApi/use-getDashboard";
import { benefits } from "@/lib/constants/loyalty/Loyalty";
import type { DashboardData } from "@/types/profile/dashboard/DashboardData";

const Loyalty = () => {
  const { data, isLoading, isError } = useGetDashboard();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={data.message} />;
  }
  const dashboardData: DashboardData = data.data;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          Loyalty & Rewards
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Track your points, rewards, and membership benefits
        </p>
      </div>

      {/* Points Balance */}
      <div className="bg-primary rounded-lg p-6 my-5 text-primary-foreground border-2 border-accent">
        <p className="text-sm opacity-80">Your Points Balance</p>
        <p className="text-4xl font-bold mt-1">
          {dashboardData.overview.loyalty_points}
        </p>
        <p className="text-sm opacity-70 mt-1">
          £ {dashboardData.overview.store_credits} in rewards
        </p>
        <Button
          variant="secondary"
          className="mt-3 border-primary-foreground/30 cursor-pointer"
        >
          Redeem Points
        </Button>
      </div>

      {/* Membership Tier */}
      <Membership overView={dashboardData.overview} />

      {/* Gold Benefits */}
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <h2 className="font-semibold text-card-foreground mb-4">
          Your Gold Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((b) => (
            <div
              key={b.label}
              className="bg-muted rounded-lg p-4 flex items-start gap-3"
            >
              <b.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-primary">{b.label}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coupons */}
      <Coupons />
    </>
  );
};

export default Loyalty;
