import React from "react";
import { Button } from "../ui/button";
import { purchases } from "@/lib/constants/dashboard/MockData";

function TopPurchases() {
  return (
    <div className="bg-card rounded-lg border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-card-foreground">Your Top Purchases</h3>
        <Button variant="outline" size="sm" className="text-xs h-7">
          Add as List
        </Button>
      </div>

      <div className="space-y-3">
        {purchases.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between border-t p-1"
          >
            <div className="flex items-center gap-3">
              <img src={p.url} alt={p.name} className="w-20 " />
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  {p.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  Bought {p.count} times
                </p>
              </div>
            </div>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs h-7 px-3"
            >
              Add
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPurchases;
