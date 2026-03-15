export interface Data {
    success: boolean;
    data:    NotificationsInterface;
}

export interface NotificationsInterface {
    order_delivery_updates: OrderDeliveryUpdates;
    deals_promotions:       DealsPromotions;
    account_reminders:      AccountReminders;
    channels:               Channels;
}

export interface AccountReminders {
    category: string;
    enabled:  boolean;
    settings: AccountRemindersSettings;
}

export interface AccountRemindersSettings {
    cart_reminders:  boolean;
    payment_billing: boolean;
}

export interface Channels {
    category: string;
    enabled:  boolean;
    settings: ChannelsSettings;
}

export interface ChannelsSettings {
    email_notifications: boolean;
    push_notifications:  boolean;
    sms_notifications:   boolean;
}

export interface DealsPromotions {
    category: string;
    enabled:  boolean;
    settings: DealsPromotionsSettings;
}

export interface DealsPromotionsSettings {
    weekly_discounts:        boolean;
    exclusive_member_offers: boolean;
    seasonal_campaigns:      boolean;
}

export interface OrderDeliveryUpdates {
    category: string;
    enabled:  boolean;
    settings: OrderDeliveryUpdatesSettings;
}

export interface OrderDeliveryUpdatesSettings {
    order_confirmation:  boolean;
    order_shipped:       boolean;
    delivery_updates:    boolean;
    out_of_stock_alerts: boolean;
}
