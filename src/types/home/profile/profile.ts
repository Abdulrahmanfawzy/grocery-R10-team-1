export interface RootInterface {
    success: boolean;
    message: string;
    data:    Data;
}

export interface Data {
    me:                  Me;
    addresses:           any[];
    order_history:       OrderHistory;
    in_progress_orders:  any[];
    order_notifications: any[];
    settings:            Settings;
    wishlist:            any[];
}

export interface Me {
    id:                  number;
    profile_picture:     string;
    name:                null;
    username:            string;
    firstName:           string;
    lastName:            string;
    gender:              string;
    birthday:            null;
    email:               string;
    phone:               string;
    country_code:        string;
    email_verified:      boolean;
    phone_verified:      boolean;
    preferred_languages: any[];
    created_at:          Date;
    updated_at:          Date;
}

export interface OrderHistory {
    orders:     any[];
    ordered_at: any[];
}

export interface Settings {
    privacy_and_security: PrivacyAndSecurity;
}

export interface PrivacyAndSecurity {
    active_sessions: ActiveSession[];
    change_password: Change;
    change_username: Change;
}

export interface ActiveSession {
    id:           number;
    name:         Name;
    last_used_at: Date | null;
    is_current:   boolean;
}

export enum Name {
    AuthToken = "auth_token",
}

export interface Change {
    available: boolean;
}
