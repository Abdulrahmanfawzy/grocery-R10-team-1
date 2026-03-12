import { Progress } from "@/components/ui/progress";
import { tiers } from "@/lib/constants/loyalty/Loyalty";
import type { Overview } from "@/types/profile/dashboard/DashboardData";
import { Crown } from "lucide-react";
interface Props {
  overView: Overview;
}

const Membership = ({ overView }: Props) => {
  const percent = (overView.loyalty_points / 10000) * 100;
  const tiersData = tiers.map((tier, index) => ({
    ...tier,
    active:
      overView.loyalty_points < 1000
        ? index === 0
        : overView.loyalty_points >= tier.pts,
  }));

  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-2">
          <Crown className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-card-foreground">
            Membership Tier: Gold
          </span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-primary font-medium">
            Progress to Platinum
          </span>
          <span className="text-sm text-muted-foreground">
            {overView.loyalty_points} / 10,000 pts
          </span>
        </div>
        <Progress
          value={percent}
          className="h-2 mb-1 [&>div]:bg-[linear-gradient(to_right,transparent_20%,var(--color-primary))]"
        />
        <p className="text-xs text-muted-foreground mb-4">
          {10000 - overView.loyalty_points} points to go!
        </p>
        <div className="grid grid-cols-4 gap-3">
          {tiersData.map((t) => (
            <div
              key={t.label}
              className={`text-center rounded-lg p-3 ${t.active ? "bg-primary text-primary-foreground" : "bg-muted text-card-foreground"}`}
            >
              <p className="text-sm font-semibold">{t.label}</p>
              <p className="text-xs">{t.pts}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;
