import { categories, status } from "@/lib/constants/dashboard/MockData";
import React from "react";

function ShoppingInsight() {
  return (
    <div className="my-5 shadow-2xl border border-border p-5">
      <h3 className="text-primary font-bold mb-3">Your Shopping Insights</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {status.map((s, index) => (
          <div
            key={index}
            className={`bg-[#014162] text-primary-foreground rounded-lg p-2 flex flex-col gap-2`}
          >
            <s.icon className="w-5 h-5 mb-2" />
            <p className="text-xs">{s.label}</p>
            <p className="font-bold text-lg">{s.value}</p>
            <p className="text-[10px]">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {categories.map((c) => (
          <div key={c.name} className="flex gap-3 space-y-4 items-baseline ">
            <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
              <div
                className={`bg-[linear-gradient(to_right,transparent_20%,var(--color-primary))] h-full rounded-full`}
                style={{ width: `${c.pct}%` }}
              />
            </div>
            <span className="text-xs text-primary w-32 shrink-0">
              {c.name} ({c.pct}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingInsight;
