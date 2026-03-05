import type { SVGProps } from "react";
import type React from "react";

export interface MenuItems {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  path: string;
}
