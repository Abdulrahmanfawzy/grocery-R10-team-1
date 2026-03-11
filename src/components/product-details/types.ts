export interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badges: string[];
  image: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  offer_title: string | null;
  price: number;
  discount_price: number | null;
  final_price: number;
  has_offer: boolean;
  rating: number;
  rating_count: number;
  size: string;
  brand: string;
  includes: string;
  how_to_use: string;
  features: string;
  expiry_date: string;
  days_until_expiry: number;
  is_expired: boolean;
  stock_quantity: number;
  in_stock: boolean;
  sold_count: number;
  is_featured: boolean;
  is_available: boolean;
  available_date: string;
  category: Category;
  subcategory: Category;
  reviews: Review[];
  created_at: string;
  updated_at: string;
}
