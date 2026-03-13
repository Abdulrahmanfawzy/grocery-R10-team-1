import React from "react";

export interface Tiers {
  label: string;
  pts: number;
  active: boolean;
}

export interface Benefits {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  desc: string;
}

export interface Coupons {
  title: string;
  code: string;
  desc: string;
}
