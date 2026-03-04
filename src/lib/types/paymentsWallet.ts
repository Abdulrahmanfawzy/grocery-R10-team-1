import React from "react";

export interface PaymentMethod {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  desc: string;
}

export interface PaymentHistory {
  order: string;
  date: string;
  amount: string;
  refund: boolean;
}
