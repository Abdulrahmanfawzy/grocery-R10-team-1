import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { orders } from "@/lib/constants/dashboard/MockData";

const RecentOrders = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-card-foreground">Recent Orders</h3>
        <Button variant="outline" size="sm" className="text-xs h-7">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order, i) => (
          <div
            key={i}
            className="border-b border-border pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-primary">
                {order.id}
              </span>
              <Badge
                variant="outline"
                className="text-[10px] border-success bg-primary text-accent "
              >
                {order.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{order.date}</p>
                <p className="text-xs text-muted-foreground">
                  {order.items} items
                </p>
              </div>
              <p className="font-semibold text-sm text-card-foreground">
                {order.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
