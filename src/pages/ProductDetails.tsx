import { useState } from "react";
import type { JSX } from "react";
import {
  FiHeart,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
} from "react-icons/fi";
import { FaStar, FaPlus } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import Navbar from "@/components/layout/Navbar";
import logo from "@/assets/home/logo.svg";

/* ---------- types ---------- */
interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  badges: string[];
  image: string;
}

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

/* ---------- mock data ---------- */
const thumbnails = [
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop",
];

const mainImage =
  "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=200&h=200&fit=crop";
const reviews: Review[] = [
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

const frequentlyBoughtTogether: RelatedProduct[] = [
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

const moreToExplore: RelatedProduct[] = [
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

/* ---------- sub-components ---------- */
function StarRow({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-[2px]">
      {[1, 2, 3, 4, 5].map((s) => (
        <FaStar
          key={s}
          size={size}
          className={s <= rating ? "text-[#F4A728]" : "text-[#EEEEEE]"}
        />
      ))}
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="bg-[#014162] text-white text-[9.5px] font-medium flex items-center justify-center w-[72px] h-[26px] px-[8px] py-[4px] rounded-tl-[15px] rounded-br-[15px]">
      {label}
    </span>
  );
}

function ProductCard({ product }: { product: RelatedProduct }) {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex-shrink-0 w-[240px] border border-[#EEEEEE] rounded-[10px] p-[16px] bg-white flex flex-col justify-between hover:shadow-sm transition-shadow">
      <div>
        <div className="flex gap-[6px] flex-wrap mb-[10px]">
          {product.badges.map((b) => (
            <Badge key={b} label={b} />
          ))}
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[140px] object-cover rounded-[8px] mb-[12px]" // Use object cover for real grocery items to fill nicely, or contain if they have white bgs
        />
        <div className="flex justify-between items-start mb-[4px]">
          <p className="text-[14.5px] font-medium text-[#222222] line-clamp-1 w-[60%]">
            {product.name}
          </p>
          <div className="flex items-center gap-[6px]">
            <span className="text-[13.5px] font-bold text-[#222222]">
              £ {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-[11.5px] line-through text-[#AAAAAA]">
                £ {product.oldPrice}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-[6px] mb-[18px]">
          <StarRow rating={product.rating} size={11.5} />
          <span className="text-[10.5px] text-[#AAAAAA]">
            Rating ({product.reviews}/5)
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[8px]">
        <button className="flex-1 flex items-center justify-center gap-[6px] bg-[#014162] text-white text-[12.5px] font-medium rounded-md py-[8px] hover:bg-[#01324c] transition-colors">
          <BsCart3 size={14} /> Add To Cart
        </button>
        <div className="flex items-center justify-between border border-[#014162] rounded-md px-[8px] py-[7px] w-[75px]">
          <GoTrash
            className="text-[#014162] text-[13px] cursor-pointer"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          />
          <span className="text-[12.5px] font-semibold text-[#222222]">
            {qty}
          </span>
          <FaPlus
            className="text-[#014162] text-[10px] cursor-pointer"
            onClick={() => setQty((q) => q + 1)}
          />
        </div>
      </div>
    </div>
  );
}

function HorizontalScroller({ products }: { products: RelatedProduct[] }) {
  // Using native CSS scrolling for smooth scroll without complex logic
  return (
    <div className="relative group/scroller">
      <button
        onClick={(e) => {
          const container = e.currentTarget.nextElementSibling;
          if (container) container.scrollBy({ left: -300, behavior: "smooth" });
        }}
        className="absolute left-[0px] top-1/2 -translate-y-1/2 -ml-[18px] z-10 w-[36px] h-[36px] rounded-full bg-white text-[#014162] border border-[#EEEEEE] flex items-center justify-center shadow-sm opacity-0 group-hover/scroller:opacity-100 transition-opacity"
      >
        <FiChevronLeft size={20} />
      </button>

      <div className="overflow-x-auto scroller-hide-scroll scroll-smooth flex gap-[16px] pb-[8px]">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <button
        onClick={(e) => {
          const container = e.currentTarget.previousElementSibling;
          if (container) container.scrollBy({ left: 300, behavior: "smooth" });
        }}
        className="absolute right-[0px] top-1/2 -translate-y-1/2 -mr-[18px] z-10 w-[36px] h-[36px] rounded-full bg-white text-[#014162] border border-[#EEEEEE] flex items-center justify-center shadow-sm opacity-0 group-hover/scroller:opacity-100 transition-opacity"
      >
        <FiChevronRight size={20} />
      </button>

      <style>{`
        .scroller-hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .scroller-hide-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default function ProductDetails(): JSX.Element {
  const [selectedThumb, setSelectedThumb] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "reviews" | "nutrition"
  >("reviews");

  const tabs = [
    { id: "description" as const, label: "Description" },
    { id: "reviews" as const, label: "Reviews" },
    { id: "nutrition" as const, label: "Nutritional Facts" },
  ];

  return (
    <>
      {" "}
      <Navbar />
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 mt-[100px] pb-[80px]">
        <p className="text-[13px] text-[#A0A0A0] mb-[32px] font-normal">
          <span>Home/ </span>
          <span>Categories/ </span>
          <span>Fruits/ </span>
          <span className="text-[#014162] font-semibold">Premium…Orange</span>
        </p>

        <div className="flex flex-col md:flex-row gap-[60px]">
          <div className="flex flex-col gap-[20px] w-full md:w-[420px] relative">
            <div className="absolute top-[16px] left-[40px] flex gap-[6px] z-10">
              <Badge label="In Stock" />
              <Badge label="Save 20%" />
              <Badge label="Organic" />
            </div>
            <img
              src={thumbnails[selectedThumb] ?? mainImage}
              alt="Product"
              className="w-full h-[360px] object-contain"
            />
            <div className="flex gap-[12px] justify-center">
              {thumbnails.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedThumb(i)}
                  className={`w-[65px] h-[65px] rounded-[10px] overflow-hidden border transition-all ${
                    selectedThumb === i
                      ? "border-[#014162]"
                      : "border-[#E8E8E8]"
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

          <div className="flex-1 mt-[10px]">
            <h1 className="text-[24px] font-bold text-[#014162] mb-[20px]">
              Premium Organic Orange
            </h1>

            <div className="flex items-center gap-[10px] mb-[12px]">
              <span className="text-[13px] text-[#888888] line-through font-medium">
                £ 25
              </span>
              <span className="text-[13px] text-[#888888] font-medium">
                | KG
              </span>
            </div>

            <p className="text-[20px] font-semibold text-[#222222] mb-[24px]">
              £ 20
            </p>

            <div className="inline-flex items-center gap-[8px] bg-[#E8E8E8] text-[#555555] text-[12.5px] font-medium px-[12px] py-[6px] rounded-md mb-[24px]">
              <MdOutlineLocalShipping size={16} />
              Priority Delivery Available
            </div>

            <div className="w-[300px] border-b border-[#E8E8E8] mb-[24px]"></div>

            <p className="text-[14px] text-[#222222] font-medium mb-[12px]">
              Quantity
            </p>
            <div className="flex items-center justify-between border border-[#014162] rounded-md w-[130px] px-[12px] py-[8px] mb-[24px]">
              <GoTrash
                className="text-[#014162] text-[15px] cursor-pointer"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              />
              <span className="text-[14px] font-semibold text-[#222222]">
                {quantity}
              </span>
              <FaPlus
                className="text-[#014162] text-[13px] cursor-pointer"
                onClick={() => setQuantity((q) => q + 1)}
              />
            </div>

            <div className="flex gap-[12px]">
              <button className="flex items-center justify-center gap-[8px] bg-[#014162] text-white text-[14.5px] font-medium px-[28px] py-[10px] rounded-md hover:bg-[#01324c] transition-colors shadow-sm">
                <BsCart3 size={17} /> Add To Cart <FiChevronRight size={17} />
              </button>
              <button className="flex items-center justify-center gap-[8px] bg-[#D4D4D4] text-[#444444] text-[14.5px] font-medium px-[24px] py-[10px] rounded-md hover:bg-[#C4C4C4] transition-colors shadow-sm">
                <FiHeart size={16} className="text-[#444444]" /> Add To Favorite
              </button>
            </div>
          </div>
        </div>

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
              Our Premium Organic Oranges are hand-picked at the peak of
              ripeness from sun-drenched orchards. Naturally sweet, seedless,
              and bursting with vitamin C, they are perfect for juicing,
              snacking, or cooking.
            </p>
          )}

          {activeTab === "reviews" && (
            <div className="flex flex-col gap-[28px] max-w-[600px]">
              {reviews.map((r) => (
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
              ))}
            </div>
          )}

          {activeTab === "nutrition" && (
            <div className="max-w-[400px]">
              <table className="w-full text-[13px] border-collapse">
                <tbody>
                  {[
                    ["Calories", "47 kcal"],
                    ["Carbohydrates", "11.8 g"],
                    ["Sugars", "9.4 g"],
                    ["Vitamin C", "53.2 mg"],
                  ].map(([n, v], i) => (
                    <tr
                      key={n}
                      className="border-b border-[#EEEEEE] last:border-0"
                    >
                      <td className="py-[12px] text-[#666666]">{n}</td>
                      <td className="py-[12px] text-right font-medium text-[#222222]">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

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
