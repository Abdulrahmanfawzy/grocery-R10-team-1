export interface Data {
    success: boolean;
    message: string;
    data:    DashboardData;
}

export interface DashboardData {
    overview:              Overview;
    shopping_insights:     ShoppingInsights;
    category_distribution: CategoryDistribution[];
    recent_orders:         RecentOrder[];
    top_purchases:         TopPurchase[];
}

export interface CategoryDistribution {
    category_id:    number;
    category_name:  string;
    total_quantity: number;
    percentage:     number;
}

export interface Overview {
    tracking_order:    TrackingOrder;
    loyalty_points:    number;
    store_credits:     number;
    current_cart:      CurrentCart;
    upcoming_delivery: null;
}

export interface CurrentCart {
    items_count:  number;
    total:        number;
    last_updated: null;
}

export interface TrackingOrder {
    id:                 number;
    order_number:       string;
    status:             string;
    status_description: string;
    status_position:    number;
}

export interface RecentOrder {
    id:                 number;
    order_number:       string;
    status:             string;
    status_description: string;
    total:              number;
    created_at:         Date;
    items_count:        number;
}

export interface ShoppingInsights {
    monthly_spend:       number;
    orders_this_month:   OrdersThisMonth;
    total_savings:       number;
    average_order_value: number;
}

export interface OrdersThisMonth {
    count:                       number;
    average_days_between_orders: number;
}

export interface TopPurchase {
    meal_id:                  number;
    title:                    string;
    image_url:                string;
    category:                 Category;
    total_quantity_purchased: number;
    total_spent:              number;
}

export interface Category {
    id:   number;
    name: string;
}
