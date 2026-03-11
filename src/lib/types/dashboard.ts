import type { DashboardData } from "@/types/profile/dashboard/DashboardData";
import type React from "react";

export interface UserData {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}
export interface menuItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  url: string;
}

export interface DashboardCard {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  buttonText: string;
  mainInfo: string;
  subInfo: string;
  extraInfo: string;
  linkText: string;
}

export interface Status {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  sub: string;
  color: string;
}

export interface Categories {
  name: string;
  pct: number;
}

export interface Orders {
  id: string;
  date: string;
  items: number;
  total: string;
  status: string;
}
export interface Purchases {
  url: string;
  name: string;
  count: number;
}
export interface OrdersProps {
  dashboardData: DashboardData;
}
