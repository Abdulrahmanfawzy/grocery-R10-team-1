import type { Datum } from "@/types/profile/smartList/ListTypes";
import { Bell, TrendingDown, Users } from "lucide-react";

interface Props {
  list: Datum;
}

const Info = ({ list }: Props) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.notify_on_offers && (
          <div className="animate-fade-in-up p-4 rounded-xl bg-card border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Offer Notifications
              </h3>
              <p className="text-xs text-muted-foreground">
                Get alerts for special deals
              </p>
            </div>
          </div>
        )}
        {list.notify_on_price_drop && (
          <div
            className="animate-fade-in-up p-4 rounded-xl bg-card border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-3"
            style={{ animationDelay: "100ms" }}
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <TrendingDown className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Price Alerts
              </h3>
              <p className="text-xs text-muted-foreground">
                Notified on price drops
              </p>
            </div>
          </div>
        )}
        <div
          className="animate-fade-in-up p-4 rounded-xl bg-card border border-border/50 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-3"
          style={{ animationDelay: "200ms" }}
        >
          <div className="p-2 rounded-lg bg-primary/10">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              Curated by {list.name}
            </h3>
            <p className="text-xs text-muted-foreground">Personal favorites</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
