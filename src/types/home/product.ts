import type { Category } from "./categories";

type Product = {
  id: number;
  title: string;
  slug: string;
  size?: string;
  brand?: string;
  description: string;
  image_url: string;
  offer_title?: string;
  in_stock: true;
  is_favorited?: false;
  is_featured?: true;
  price: number;
  rating?: number;
  rating_count?: number;
  discount_price: number;
  stock_quantity?: number;
  sold_count?: number;
  final_price: number;
  has_offer: boolean;
  category: Category;
  subcategory?: Category;
  features: string;
  available_date?: string;
  created_at?: string;
};

type ProductList = Product[];

type ProductsAPIResponse = {
  data: Product[];
};
export type { Product, ProductList, ProductsAPIResponse };
