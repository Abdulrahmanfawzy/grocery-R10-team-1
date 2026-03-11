import type { RelatedProduct, Review } from "./types";

export const thumbnails = [
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop",
];

export const mainImage =
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop";

export const reviews: Review[] = [
  {
    id: 1,
    name: "Alaa Brozel",
    avatar: "https://i.pravatar.cc/40?img=1",
    rating: 5,
    date: "Reviewed in 30th Of December 2023",
    comment: "Super fresh and Flavorful-arrived perfectly ripe.",
  },
  {
    id: 2,
    name: "Sana Ahmed",
    avatar: "https://i.pravatar.cc/40?img=5",
    rating: 4,
    date: "Reviewed in 1st of November 2023",
    comment: "Great for juicing, very sweet and clean.",
  },
  {
    id: 3,
    name: "Jana Emad",
    avatar: "https://i.pravatar.cc/40?img=9",
    rating: 5,
    date: "Reviewed in 20th OF July 2024",
    comment: "Consistent quality every time. Highly recommend.",
  },
];

export const frequentlyBoughtTogether: RelatedProduct[] = [
  {
    id: 1,
    name: "Spiro Spathis Lemon",
    price: 8.8,
    oldPrice: 11,
    rating: 4,
    reviews: 5,
    badges: ["In Stock", "Save 20%", "New"],
    image:
      "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "V7 Cola - 300Ml",
    price: 15,
    rating: 4,
    reviews: 5,
    badges: ["In Stock"],
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Nestlé Pure Life 6 L",
    price: 80,
    rating: 5,
    reviews: 5,
    badges: ["In Stock"],
    image:
      "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Spiro Spathis Apple",
    price: 8.8,
    rating: 4,
    reviews: 5,
    badges: ["In Stock"],
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Spiro Spathis Apple",
    price: 8.8,
    rating: 4,
    reviews: 5,
    badges: ["In Stock"],
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop",
  },
];

export const moreToExplore: RelatedProduct[] = [
  {
    id: 5,
    name: "Red Apple- 1Kg",
    price: 30,
    oldPrice: 38,
    rating: 4,
    reviews: 5,
    badges: ["In Stock", "Save 20%", "Organic"],
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Kiwis - 1Kg",
    price: 150,
    rating: 4,
    reviews: 5,
    badges: ["Organic", "Save 20%"],
    image:
      "https://images.unsplash.com/photo-1511930876399-6e4b7cf6d8f0?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Pineapples - 1Piece",
    price: 120,
    rating: 5,
    reviews: 5,
    badges: ["In Stock"],
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Pineapples - 1Piece",
    price: 120,
    rating: 5,
    reviews: 5,
    badges: ["In Stock"],
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop",
  },
];
