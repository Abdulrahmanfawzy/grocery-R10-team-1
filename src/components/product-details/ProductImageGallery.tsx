import { useState } from "react";
import { Badge } from "./Badge";
import type { Product } from "./types";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [selectedThumb, setSelectedThumb] = useState(0);

  // We only have one image from the API right now, but keeping thumbnails logic in case more are added
  const thumbnails = [product.image_url];

  return (
    <div className="flex flex-col gap-[20px] w-full md:w-[420px] relative">
      <div className="absolute top-[50px] left-[40px] flex gap-[6px] z-10 flex-wrap max-w-[80%]">
        {product.in_stock ? (
          <Badge label="In Stock" />
        ) : (
          <Badge label="Out of Stock" />
        )}
        {product.has_offer && product.offer_title && (
          <Badge label={product.offer_title} />
        )}
        {product.features &&
          product.features
            .split(",")
            .map((feature) => <Badge key={feature} label={feature.trim()} />)}
      </div>
      <img
        src={thumbnails[selectedThumb] ?? product.image_url}
        alt={product.title}
        className="w-full h-[360px] object-contain"
      />
      <div className="flex gap-[12px] justify-center">
        {thumbnails.map((t, i) => (
          <button
            key={i}
            onClick={() => setSelectedThumb(i)}
            className={`w-[65px] h-[65px] rounded-[10px] overflow-hidden border transition-all ${
              selectedThumb === i ? "border-[#014162]" : "border-[#E8E8E8]"
            }`}
          >
            <img
              src={t}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
