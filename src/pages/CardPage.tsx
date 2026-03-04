import type { JSX } from "react";
import { GoTrash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import PromoIcon from "../assets/PromoIcon.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface Product {
  id: number;
  name: string;
  quantity: number;
  image: string;
}
export default function CardPage(): JSX.Element {
  //    add ten product in  product page array.

  const products: Product[] = [
    {
      id: 1,
      name: "Organic Apple - 1KG",
      quantity: 1,
      image: `data:image/jpeg;base64,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`,
    },
    {
      id: 2,
      name: "Organic Banana - 1KG",
      quantity: 1,
      image: `data:image/jpeg;base64,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`,
    },
    {
      id: 3,
      name: "Premium Orange - 1KG",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 4,
      name: "Fresh Grapes - 500g",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 5,
      name: "Organic Mango - 1KG",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 6,
      name: "Organic Strawberry - 250g",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 7,
      name: "Fresh Pineapple - 1PC",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 8,
      name: "Organic Watermelon - 1PC",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 9,
      name: "Fresh Blueberry - 200g",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
    {
      id: 10,
      name: "Organic Kiwi - 1KG",
      quantity: 1,
      image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...`,
    },
  ];

  return (
    <div className="w-full md:w-[80%] max-w-7xl mx-auto md:px-8 mt-[136px] px-4 pb-[80px] md:pb-0">
      <h2 className="text-[20px] font-medium leading-1.5 tracking-normal text-[#014162]">
        <span className="text-[#BCB8B1]">Home/</span>Cart
      </h2>
      <div className="mt-[59px]">
        <h2 className="font-medium text-[20px] leading-1.5 text-[#0E1112]">
          Products in Cart
        </h2>
        <div className="mt-[20px] flex flex-wrap">
          <ProductSelector products={products} />
        </div>
      </div>
      {/* OrderSummary hidden on mobile, shown on md+ */}
      <div className="hidden md:block">
        <OrderSummary />
      </div>
      <MoreToExplore />
      {/* Mobile-only fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#BCB8B1] p-4 flex items-center justify-between md:hidden z-50">
        <div>
          <p className="text-[12px] text-[#6B6F75]">Total</p>
          <p className="text-[18px] font-bold text-[#0E1112]">£233</p>
        </div>
        <button className="bg-[#014162] text-white text-[14px] font-medium py-[14px] px-[32px] rounded-[10px]">
          Continue To Checkout
        </button>
      </div>
    </div>
  );
}

function QuantitySelector() {
  return (
    <div className="flex justify-between items-center border-1 w-[120px] md:w-[136px] border-[#BCB8B1] rounded-[10px] p-[8px]">
      {/* On mobile hide trash icon from quantity selector (shown at top-right instead) */}
      <span className="text-[#014162] text-[16px] font-bold md:hidden select-none">
        −
      </span>
      <GoTrash className="text-[#014162] text-[16px] hidden md:block" />
      <div className="text-[18px] font-[400] leading-[120%] text-[#0E1112]">
        2
      </div>
      <FaPlus className="text-[#014162] text-[16px]" />
    </div>
  );
}

function ProductSelector({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="w-full md:w-1/2 p-[16px]">
            <ProductItem product={product} />
          </div>
        );
      })}
    </>
  );
}
function ProductItem({ product }: { product: Product }) {
  return (
    <div className="w-full md:h-[130px] border-b border-[#BCB8B1] md:border-none pb-4 md:pb-0">
      <div className="flex items-start">
        {/* Image */}
        <div className="mr-[8px] flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-[100px] h-[100px] md:w-[80px] md:h-[80px] rounded-[8px] object-cover"
          />
          <div className="rounded-tl-[15px] rounded-br-[15px] bg-[#0E1112] text-white text-[12px] px-[8px] py-[4px] text-center mt-[8px]">
            In Stock
          </div>
        </div>

        {/* Info */}
        <div className="ml-[16px] flex-1">
          {/* Mobile: trash icon top-right */}
          <div className="flex justify-between items-start">
            <p className="text-[14px] font-medium line-clamp-2 flex-1 pr-2">
              {product.name}
            </p>
            <GoTrash className="text-[#014162] text-[18px] md:hidden flex-shrink-0" />
          </div>

          {/* Price: on mobile show prominently */}
          <div className="flex items-center gap-2 mt-[6px]">
            <span className="text-[16px] font-bold text-[#014162]">£33</span>
            <span className="text-[13px] text-[#BCB8B1] line-through">£40</span>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center mt-[10px]">
            <QuantitySelector />
            <div className="font-medium text-[15px] ml-5 hidden md:block">
              10 $
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function OrderSummary() {
  return (
    <div className="flex justify-between mt-[32px]">
      <div className="w-1/3 ">
        <h2 className="mb-1">Total Amount</h2>
        <div className=" border-1 rounded-[10px] border-[#BCB8B1]">
          <div className="p-[16px]">
            <div className="flex justify-between">
              <p className="tex-[#6B6F75]">Subtotal</p>
              <p className="tex-[#6B6F75]">10 $</p>
            </div>
            <div className="flex justify-between">
              <p className="tex-[#6B6F75]">Shipping</p>
              <p className="tex-[#6B6F75]">10 $</p>
            </div>
            <div className="flex justify-between border-t-1 border-[#BCB8B1] mt-[10px] pt-[10px]">
              <p>Total</p>
              <p>10 $</p>
            </div>
            <button className="bg-[#014162] mt-[10px] text-white text-[12px] p-[8px] w-[150px] rounded-[10px]">
              Go To Checkout{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="mb-1">Delivery Details & Promo Code</h2>
        <div className=" border-1 rounded-[10px] border-[#BCB8B1] p-[16px]">
          <div className="flex items-center ">
            <img src={PromoIcon} alt="PromoIcon" className="mr-[8px]" />
            <p>Promo Code</p>
          </div>
          <div className="flex justify-between mt-[10px]">
            <input
              type="text"
              placeholder="   Save 10%"
              className="border-1 rounded-[6px] border-[#BCB8B1] w-[79px] placeholder-[#BCB8B1] placeholder:text-[#BCB8B1] text-[12px]"
            />
            <button className="bg-[#BCB8B1] text-white text-[12px] p-[8px] w-[150px] rounded-[10px]">
              Apply Code
            </button>
          </div>
          <h4 className="mt-[10px]">Delivery Address</h4>
          <div className="flex justify-between mt-[10px] ">
            <input
              type="text"
              placeholder="   Enter Promo Code"
              className="w-[70%] border-1 rounded-[6px] border-[#BCB8B1]  placeholder-[#BCB8B1] placeholder:text-[#BCB8B1] text-[12px]"
            />
            <button className="bg-[#BCB8B1] text-white text-[12px] p-[8px] w-[20%] rounded-[10px]  ">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MoreToExplore() {
  return (
    <div className="relative mt-[40px] md:mt-[100px] mx-auto w-full">
      <h2 className="text-[20px] md:text-[24px] font-[400] mb-5 leading-[120%] text-[#0E1112]">
        More To Explore
      </h2>
      <div className="absolute top-1/2 right-0 flex justify-between">
        <FaAngleRight className="text-[#014162] text-[30px]" />
      </div>
      <div className="absolute top-1/2 left-0 flex justify-between">
        <FaAngleLeft className="text-[#014162] text-[30px]" />
      </div>
      {/* Mobile: 2-column grid, Desktop: flex row */}
      <div className="grid grid-cols-2 gap-3 px-6 md:hidden">
        <ProductCard />
        <ProductCard />
      </div>
      <div className="hidden md:flex justify-evenly px-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="w-full md:w-[200px] md:h-[200px] border-1 rounded-[10px] border-[#BCB8B1] p-2 relative">
      <img
        src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&h=150&fit=crop"
        alt="Product"
        className="w-full h-[120px] object-cover rounded-[8px]"
      />
      {/* Heart icon on mobile */}
      <div className="absolute top-4 right-4 w-[28px] h-[28px] bg-white rounded-full flex items-center justify-center shadow-sm">
        <span className="text-[#BCB8B1] text-[14px]">♡</span>
      </div>
      <p className="text-[12px] mt-1 line-clamp-1">Organic Apple - 1KG</p>
      <p className="text-[13px] font-bold text-[#014162]">£10</p>
    </div>
  );
}
