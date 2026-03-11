export interface FavoriteInterface {
    success:     boolean;
    message:     string;
    data:        Datum[];
    total_count: number;
}

export interface Datum {
    id:             number;
    title:          string;
    slug:           string;
    description:    string;
    image_url:      string;
    offer_title:    string;
    price:          number;
    discount_price: number;
    final_price:    number;
    has_offer:      boolean;
    rating:         number;
    rating_count:   number;
    size:           string;
    brand:          string;
    stock_quantity: number;
    in_stock:       boolean;
    is_available:   boolean;
    is_featured:    boolean;
    category:       Category;
    subcategory:    Category | null;
    is_favorited:   boolean;
    favorited_at:   Date;
}

export interface Category {
    id:   number;
    name: string;
    slug: string;
}
