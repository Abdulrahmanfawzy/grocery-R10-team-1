export interface ListInterface {
  success: boolean;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  category: null;
  description: string;
  image_url: null | string;
  notify_on_price_drop: boolean;
  notify_on_offers: boolean;
  meals: Meal[];
}

export interface Meal {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  offer_title: null | string;
}
