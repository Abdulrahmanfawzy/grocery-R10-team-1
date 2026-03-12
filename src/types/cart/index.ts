export interface CartItem {
  id: number;
  quantity: number;
  unit_price: number;
  discount_amount: number;
  subtotal: number;
  meal: {
    id: number;
    title: string;
    slug: string;
    image_url: string;
    price: number;
    discount_price: number | null;
    final_price: number;
    rating: number;
    size: string;
    brand: string;
    stock_quantity: number;
    is_available: boolean;
    in_stock: boolean;
    category: {
      id: number;
      name: string;
    };
    subcategory: {
      id: number;
      name: string;
    } | null;
  };
}
