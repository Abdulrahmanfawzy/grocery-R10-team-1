import Greeting from "@/components/dashboard/Greeting";
import RecentOrders from "@/components/dashboard/RecentOrders";
import ShoppingInsight from "@/components/dashboard/ShoppingInsight";
import TopPurchases from "@/components/dashboard/TopPurchases";
import { Button } from "@/components/ui/button";
import { cards } from "@/lib/constants/dashboard/MockData";
import { ArrowRight, Calendar } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <Greeting />
      <div className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-3">
        {cards.map((item) => (
          <div className="bg-card rounded-lg border border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-semibold text-sm text-card-foreground">
                  {item.title}
                </h3>
              </div>
              <Button variant="outline" size="sm" className="text-xs h-7">
                {item.buttonText}
              </Button>
            </div>
            <div className="bg-[#F7FCFF] p-3 rounded-lg shadow">
              <p className="text-card-foreground text-sm mb-1">
                {item.mainInfo}
              </p>
              <p className="text-xs text-muted-foreground">{item.subInfo}</p>
              <p className="text-xs text-muted-foreground mb-4">
                {item.extraInfo}
              </p>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground 
            hover:bg-primary/90 text-sm flex items-center gap-2 mt-2"
            >
              {item.linkText}
              <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
      <ShoppingInsight />
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-5">
        <RecentOrders />
        <TopPurchases />
      </div>
    </div>
  );
};

export default Dashboard;
