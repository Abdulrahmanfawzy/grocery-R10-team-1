export interface PaymentInterface {
    success:      boolean;
    message:      string;
    data:         Datum[];
    total_count:  number;
    total_amount: number;
}

export interface Datum {
    id:                 number;
    order_number:       string;
    payment_method:     string;
    payment_method_id:  string;
    amount:             number;
    subtotal:           number;
    tax:                number;
    discount:           number;
    status:             string;
    status_description: string;
    payment_date:       Date;
    created_at:         Date;
    items_count:        number;
}
