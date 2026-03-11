export interface OrdersInterface {
    success:     boolean;
    message:     string;
    data:        Datum[];
    total_count: number;
}

export interface Datum {
    id:                      number;
    order_number:            string;
    payment_method:          PaymentMethod;
    delivery_type:           DeliveryType;
    status:                  Status;
    status_position:         number;
    status_description:      StatusDescription;
    items:                   Item[];
    address:                 Address | null;
    subtotal:                string;
    tax:                     string;
    discount:                string;
    shipping_fee:            number;
    total:                   string;
    notes:                   null | string;
    created_at:              Date;
    updated_at:              Date;
    placed_at:               Date;
    processing_at:           null;
    shipping_at:             null;
    out_for_delivery_at:     null;
    delivered_at:            null;
    estimated_delivery_time: null;
    special_note:            null | string;
    schedule_delivery:       null;
    delivery_speed:          null;
}

export interface Address {
    id:              number;
    label:           null;
    full_name:       string;
    phone:           string;
    country_code:    string;
    street_address:  string;
    building_number: null;
    floor:           null;
    apartment:       null;
    landmark:        null;
    city:            string;
    state:           null;
    postal_code:     null;
    country:         Country;
    full_address:    FullAddress;
    latitude:        null;
    longitude:       null;
}

export enum Country {
    Egypt = "Egypt",
}

export enum FullAddress {
    The11Egypt = "1, 1, Egypt",
    العظمةالقاهرةEgypt = "العظمة, القاهرة, Egypt",
}

export enum DeliveryType {
    Delivery = "delivery",
    Pickup = "pickup",
}

export interface Item {
    id:              number;
    meal:            Meal;
    quantity:        number;
    unit_price:      number;
    discount_amount: number;
    subtotal:        number;
}

export interface Meal {
    id:             number;
    title:          string;
    slug:           string;
    image_url:      string;
    price:          number;
    discount_price: number | null;
    final_price:    number;
    category:       Category;
    subcategory:    Category | null;
}

export interface Category {
    id:   number;
    name: string;
}

export enum PaymentMethod {
    CashOnDelivery = "cash_on_delivery",
}

export enum Status {
    Placed = "placed",
}

export enum StatusDescription {
    OrderPlaced = "Order placed",
}
