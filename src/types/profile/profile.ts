export interface ProfileInterface {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  me: Me;
  addresses: Address[];
  order_history: OrderHistory;
  in_progress_orders: InProgressOrder[];
  order_notifications: any[];
  settings: Settings;
  wishlist: any[];
}

export interface Address {
  id: number;
  label: null;
  full_name: string;
  phone: string;
  country_code: string;
  street_address: string;
  building_number: null;
  floor: null;
  apartment: null;
  landmark: null;
  city: string;
  state: null;
  postal_code: null;
  country: string;
  full_address: string;
  is_default: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface InProgressOrder {
  id: number;
  order_number: string;
  status: string;
  status_description: string;
  tracking: Tracking;
  total: number;
  placed_at: Date;
  estimated_delivery_time: null;
  address: Address;
  items: Item[];
}

export interface Item {
  id: number;
  meal: Meal;
  quantity: number;
  subtotal: number;
}

export interface Meal {
  id: number;
  title: string;
  image_url: string;
}

export interface Tracking {
  stage: string;
  stage_label: string;
  positions: Position[];
}

export interface Position {
  stage: string;
  label: string;
  completed: boolean;
  timestamp: null;
}

export interface Me {
  id: number;
  profile_picture: string;
  name: null;
  username: string;
  firstname: null;
  lastname: null;
  gender: null;
  birthday: null;
  email: string;
  phone: string;
  country_code: string;
  email_verified: boolean;
  phone_verified: boolean;
  preferred_languages: any[];
  created_at: Date;
  updated_at: Date;
}

export interface OrderHistory {
  orders: Order[];
  ordered_at: Date[];
}

export interface Order {
  id: number;
  order_number: string;
  status: string;
  status_description: string;
  total: number;
  placed_at: Date;
  created_at: Date;
  item_count: number;
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
  id: number;
  name: Name;
  last_used_at: Date | null;
  is_current: boolean;
}

export enum Name {
  AuthToken = "auth_token",
}

export interface Change {
  available: boolean;
}
