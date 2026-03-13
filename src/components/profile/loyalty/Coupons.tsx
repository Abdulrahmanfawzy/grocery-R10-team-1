import { Button } from "@/components/ui/button";
import { coupons } from "@/lib/constants/loyalty/Loyalty";
import { Tag } from "lucide-react";



const Coupons = () => {
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6 my-5">
        <h2 className="font-semibold text-card-foreground mb-4">
          Your Coupons
        </h2>
        <div className="space-y-3">
          {coupons.map((c) => (
            <div
              key={c.code}
              className="flex items-center justify-between border border-border rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {c.title}
                  </p>
                  <p className="text-sm text-card-foreground">
                    Code: <span className="font-bold">{c.code}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
              </div>
              <Button size="sm">Apply</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
