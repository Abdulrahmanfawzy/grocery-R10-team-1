export interface productlistInterFace {
  success: boolean
  message: string
  data: Daum[]
  total_count: number
  filters_applied: FiltersApplied
}

export interface Daum {
  id: number
  title: string
  slug: string
  description: string
  image_url: string
  offer_title?: string
  price: number
  discount_price?: number
  final_price: number
  has_offer: boolean
  rating: number
  rating_count: number
  size: string
  brand: string
  stock_quantity: number
  in_stock: boolean
  is_featured: boolean
  sold_count: number
  category: Category
  subcategory?: Subcategory
  features: string
  is_favorited: boolean
  created_at: string
}

export interface Category {
  id: number
  name: string
}

export interface Subcategory {
  id: number
  name: string
}

export interface FiltersApplied {
  search: any
  category_id: any
  subcategory_id: any
  min_price: any
  max_price: any
  min_rating: any
  brand: any
  featured: boolean
  in_stock: boolean
  sort_by: string
  sort_order: string
}