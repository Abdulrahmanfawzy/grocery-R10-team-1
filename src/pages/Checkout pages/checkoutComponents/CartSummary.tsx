import image from "../image/cdd354bafa01896505700013e355f3da0c736913.png";
import CreatProductCart from "./creatProductCart";
import { currencyFormat } from "@/lib/utils/currencyFormat";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  quantityOrdered: number;
}

function CartSummary() {
  const groceryProducts: Product[] = [
    {
      id: 1,
      name: "Fresh Milk 1L",
      price: 30,
      image: image,
      inStock: true,
      quantityOrdered: 2,
    },
    {
      id: 2,
      name: "White Bread",
      price: 15,
      image: image,
      inStock: true,
      quantityOrdered: 1,
    },
    {
      id: 3,
      name: "Brown Eggs (12 pcs)",
      price: 85,
      image: image,
      inStock: false,
      quantityOrdered: 0,
    },
    {
      id: 4,
      name: "Sugar 1KG",
      price: 40,
      image: image,
      inStock: true,
      quantityOrdered: 3,
    },
    {
      id: 5,
      name: "Rice 1KG",
      price: 35,
      image: image,
      inStock: true,
      quantityOrdered: 1,
    },
    {
      id: 6,
      name: "Sunflower Oil 1L",
      price: 75,
      image: image,
      inStock: false,
      quantityOrdered: 0,
    },
    {
      id: 7,
      name: "Pasta 500g",
      price: 20,
      image: image,
      inStock: true,
      quantityOrdered: 4,
    },
  ];

  return (
    <div >
      <h2 className=" text-xl font-medium mb-2 text-gray-700">Cart Summary</h2>

      <div className=" w-full pl-6 bg-white border border-gray-300 rounded-md flex flex-col gap-3">
        <div className="  overflow-y-scroll h-96">
          {groceryProducts.map((product) => (
            <CreatProductCart key={product.id} product={product} />
          ))}
        </div>
        <div>
          <h2 className=" text-xl text-DarkBlue-color font-medium">
            Total Amount
          </h2>
          <div className="">
            <div className=" mt-4 grid grid-cols-2 gap-3 border-b border-gray-500 pb-3 text-gray-600 ">
              <h2>Subtotal</h2>
              <h2>{currencyFormat(320)}</h2>

              <h2>Shipping</h2>
              <h2>{currencyFormat(30)}</h2>
            </div>
            <div className=" mt-4 grid grid-cols-2 gap-3 pt-3 text-gray-900 mb-6 ">
              <h2>Total</h2>
              <h2>{currencyFormat(530)}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
