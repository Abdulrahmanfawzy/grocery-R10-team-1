export interface FAQInterface {
  data: Data;
}

export interface Data {
  data: Datum[];
  meta: Meta;
  links: Links;
}

export interface Datum {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Links {
  first: string;
  last: string;
  prev: null;
  next: string;
}

export interface Meta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}
