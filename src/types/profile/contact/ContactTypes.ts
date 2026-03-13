export interface ContactInterface {
  success: boolean;
  data: Data;
}

export interface Data {
  id: number;
  social_media: SocialMedia;
  contact_info: ContactInfo;
  site_info: SiteInfo;
  shipping: Shipping;
  created_at: Date;
  updated_at: Date;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface Shipping {
  shipping_fee: number;
  free_shipping_min_order: null;
}

export interface SiteInfo {
  site_name: string;
  site_description: string;
  copyright_text: string;
  logo: null;
  favicon: null;
}

export interface SocialMedia {
  facebook: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}
