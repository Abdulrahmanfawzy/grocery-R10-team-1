"use client";

import { useState } from "react";
import { Heart, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Meal } from "@/types/profile/smartList/ListTypes";
import AddToCart from "../addToCart/AddToCart";
import { useToggleToFavorite } from "@/lib/api/profile/addToFavorite/use-addToFavorite";
import type { Datum } from "@/types/profile/smartList/FavoritesTypes";

interface ItemCardProps {
  item: Meal;
  index: number;
  favoriteItems: Datum[];
}

export function ItemCard({ item, index, favoriteItems }: ItemCardProps) {
  const { mutate, isPending } = useToggleToFavorite();
  const [isHovered, setIsHovered] = useState(false);
  function toggleFavorite(id: number) {
    mutate(id);
  }
  const animationDelay = index * 100;

  return (
    <div
      className="group animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" w-full rounded-2xl overflow-hidden bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:border-primary/30 flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-56 overflow-hidden bg-muted">
          <img
            src={item.image_url}
            alt={item.title}
            className={`object-cover w-full  transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Offer Badge */}
          {item.offer_title && (
            <div className="absolute top-4 right-4 bg-linear-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105">
              {item.offer_title}
            </div>
          )}

          {/* Overlay gradient on hover */}
          <div
            className={`absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Action buttons on hover */}
          <div
            className={`absolute inset-0 flex items-end justify-center pb-4 gap-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full h-10 w-10 shadow-lg hover:scale-110 transition-transform"
              onClick={() => toggleFavorite(item.id)}
            >
              <Heart
                className={`h-5 w-5 transition-all ${
                  favoriteItems.some(
                    (favoriteItem) => favoriteItem.id === item.id,
                  )
                    ? "fill-current text-red-500"
                    : ""
                }`}
              />
            </Button>
            <AddToCart
              id={item.id}
              quantity={1}
              size="icon-lg"
              icon={<ShoppingCart className="h-5 w-5" />}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
