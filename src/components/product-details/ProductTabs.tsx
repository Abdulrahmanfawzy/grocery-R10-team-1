import { useState } from "react";
import { StarRow } from "./StarRow";
import type { Review, Product } from "./types";

interface ProductTabsProps {
  product: Product;
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "description" | "reviews" | "nutrition"
  >("reviews");

  const tabs = [
    { id: "description" as const, label: "Description" },
    { id: "reviews" as const, label: "Reviews" },
    { id: "nutrition" as const, label: "Nutritional Facts" },
  ];

  return (
    <div className="mt-[64px]">
      <div className="flex gap-[8px] border-b border-[#EEEEEE] pb-[16px] mb-[24px]">
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-[16px] py-[6px] text-[13.5px] font-medium rounded-full transition-colors ${
                isActive
                  ? "bg-[#014162] text-white"
                  : "bg-[#D4D4D4] text-[#444444] hover:bg-[#C4C4C4]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {activeTab === "description" && (
        <p className="text-[14px] text-[#444444] leading-[1.8] max-w-[700px]">
          {product.description}
        </p>
      )}

      {activeTab === "reviews" && (
        <div className="flex flex-col gap-[28px] max-w-[600px]">
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((r) => (
              <div key={r.id} className="flex gap-[14px]">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-[44px] h-[44px] rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="flex flex-col mb-[4px]">
                    <span className="text-[13.5px] font-medium text-[#222222]">
                      {r.name}
                    </span>
                  </div>
                  <StarRow rating={r.rating} size={11.5} />
                  <span className="text-[10px] text-[#AAAAAA] mt-[4px] block">
                    {r.date}
                  </span>
                  <p className="text-[12px] font-medium text-[#222222] mt-[6px]">
                    {r.comment}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[14px] text-[#888888]">
              No reviews available for this product yet.
            </p>
          )}
        </div>
      )}

      {activeTab === "nutrition" && (
        <div className="max-w-[400px]">
          <table className="w-full text-[13px] border-collapse">
            <tbody>
              <tr className="border-b border-[#EEEEEE]">
                <td className="py-[12px] text-[#666666]">Brand</td>
                <td className="py-[12px] text-right font-medium text-[#222222]">
                  {product.brand}
                </td>
              </tr>
              <tr className="border-b border-[#EEEEEE]">
                <td className="py-[12px] text-[#666666]">Size</td>
                <td className="py-[12px] text-right font-medium text-[#222222]">
                  {product.size}
                </td>
              </tr>
              <tr className="border-b border-[#EEEEEE]">
                <td className="py-[12px] text-[#666666]">Includes</td>
                <td className="py-[12px] text-right font-medium text-[#222222]">
                  {product.includes}
                </td>
              </tr>
              <tr className="border-b border-[#EEEEEE] last:border-0">
                <td className="py-[12px] text-[#666666]">How to Use</td>
                <td className="py-[12px] text-right font-medium text-[#222222]">
                  {product.how_to_use}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
