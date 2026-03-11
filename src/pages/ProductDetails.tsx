import type { JSX } from "react";
import { ProductImageGallery } from "@/components/product-details/ProductImageGallery";
import { ProductInfo } from "@/components/product-details/ProductInfo";
import { ProductTabs } from "@/components/product-details/ProductTabs";
import { HorizontalScroller } from "@/components/product-details/HorizontalScroller";
import {
  frequentlyBoughtTogether,
  moreToExplore,
} from "@/components/product-details/mockData";
import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "@/lib/api/productDetails/poductDetails.api";
import { useParams } from "react-router-dom";
import { string } from "zod";

export default function ProductDetails(): JSX.Element {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["productDetails"],
    queryFn: () => getProductDetails(id),
    staleTime: 10000,
  });
  // The API returns the product object nested inside `data.data`
  const product = data?.data?.data;

  // Handle Loading & Error States
  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-[#014162] text-[18px] font-medium">
          Loading product details...
        </p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-[18px] font-medium">
          Failed to load product details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      {" "}
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 mt-[100px] pb-[80px]">
        <p className="text-[13px] text-[#A0A0A0] mb-[32px] font-normal">
          <span>Home/ </span>
          <span>Categories/ </span>
          <span>{product.category?.name || "Products"}/ </span>
          <span className="text-[#014162] font-semibold">{product.title}</span>
        </p>

        <div className="flex flex-col md:flex-row gap-[60px]">
          <ProductImageGallery product={product} />
          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} />

        <section className="mt-[64px]">
          <h2 className="text-[16px] font-bold text-[#222222] mb-[20px]">
            Frequently Bought Together
          </h2>
          <div>
            <HorizontalScroller products={frequentlyBoughtTogether} />
          </div>
        </section>

        <section className="mt-[48px]">
          <h2 className="text-[16px] font-bold text-[#222222] mb-[20px]">
            More To Explore
          </h2>
          <div>
            <HorizontalScroller products={moreToExplore} />
          </div>
        </section>
      </div>
    </>
  );
}
