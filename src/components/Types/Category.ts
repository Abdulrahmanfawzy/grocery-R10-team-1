export type CategoryMiniSlider = {
  name: string;
  image: string;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string | null;
  meals_count: number;
  sort_order: number;
  created_at: string;
};

export type CategoriesResponse = {
  success: boolean;
  message: string;
  data: Category[];
};

export type MeatCategory = {
  name: string;
  image: string;
  price: string;
  discount: number;
  inStock: number;
  isNew: boolean;
  hasDiscount: boolean;
  rate: number;
};

export type Subcategory = {
  id: number;
  name: string;
  slug: string;
};

export type Meal = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  offer_title: string;
  price: number;
  discount_price: number;
  final_price: number;
  has_offer: boolean;
  rating: number;
  rating_count: number;
  size: string;
  brand: string;
  stock_quantity: number;
  in_stock: boolean;
  is_featured: boolean;
  expiry_date: string;
  days_until_expiry: number;
  is_expired: boolean;
  features: string;
  subcategory: Subcategory | null;
};

export type Pagination = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
};

export type MealsData = {
  category: {
    id: number;
    name: string;
    slug: string;
  };
  meals: Meal[];
  pagination: Pagination;
};

export type MealsResponse = {
  success: boolean;
  message: string;
  data: MealsData;
};
