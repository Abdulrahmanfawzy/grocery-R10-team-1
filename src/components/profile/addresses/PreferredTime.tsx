import { CheckCircle, Clock } from "lucide-react";
import React from "react";

const deliveryWindows = [
  { label: "Morning", time: "8:00 AM - 12:00 PM", selected: true },
  { label: "Afternoon", time: "12:00 PM - 5:00 PM", selected: false },
  { label: "Evening", time: "5:00 PM - 8:00 PM", selected: true },
];

const PreferredTime = () => {
  return (
    <div>
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-5 h-5 text-card-foreground" />
          <h2 className="font-semibold text-card-foreground">
            Preferred Delivery Windows
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Select your preferred time slots for deliveries
        </p>
        <div className="grid grid-cols-3 gap-3">
          {deliveryWindows.map((w) => (
            <div
              key={w.label}
              className={`border rounded-lg p-4 text-center ${
                w.selected ? "border-primary bg-primary/5" : "border-border"
              }`}
            >
              <div className="flex items-center justify-center gap-1">
                <p
                  className={`text-sm font-semibold ${w.selected ? "text-primary" : "text-card-foreground"}`}
                >
                  {w.label}
                </p>
                {w.selected && <CheckCircle className="w-4 h-4 text-primary" />}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{w.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferredTime;
