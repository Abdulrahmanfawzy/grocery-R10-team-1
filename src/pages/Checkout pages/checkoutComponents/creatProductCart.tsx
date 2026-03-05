import "../../../index.css";
import { currencyFormat } from "@/lib/utils/currencyFormat";
import { useState } from "react";
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  quantityOrdered: number;
}

interface Props {
  product: Product;
}

function CreatProductCart({ product }: Props) {
  const [quantityOrdered, setQuantityOrdered] = useState(1);

  return (
    <div className=" px-4 py-2 w-full h-28 border-b border-gray-400 grid grid-cols-6">
      <div className=" flex flex-col items-center gap-2 ">
        <img
          className=" rounded-sm w-14 h-14"
          src={product.image}
          alt={product.name}
        />
        <h2 className=" background-DarkBlue-color text-xs text-white p-1 rounded-tl-lg rounded-br-lg ">
          {product.inStock ? " In Stock" : " Out Of Stock"}
        </h2>
      </div>
      <div className=" flex flex-col  grow col-span-4 lg:col-span-5 gap-2 ">
        <h2 className=" text-xl font-thin text-gray-900 ">{product.name}</h2>
        <div className=" flex items-center justify-between ">
          <div>
            <div className=" flex items-center justify-between gap-2 w-24 border border-gray-500 font-bold text-DarkBlue-color p-1 rounded-md">
              {quantityOrdered == 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              ) : (
                <p className=" cursor-pointer" onClick={()=> setQuantityOrdered(quantityOrdered-1)}>-</p>
              )}
              {quantityOrdered}

              <p className=" cursor-pointer" onClick={()=> setQuantityOrdered(quantityOrdered+1)}>+</p>
            </div>
          </div>
          <h2>{currencyFormat(product.price)}</h2>
        </div>
      </div>
    </div>
  );
}

export default CreatProductCart;
