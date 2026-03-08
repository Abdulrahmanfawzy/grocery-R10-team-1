import image from "../image/cdd354bafa01896505700013e355f3da0c736913.png";
import CreatProductCart from "./creatProductCart";
import "../../../index.css"

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

      <div className=" w-full bg-white  flex flex-col gap-3">
        <div className="  overflow-y-scroll scrollbar-style h-96">
          {groceryProducts.map((product , index ) => (
            <CreatProductCart islastProduct= {index === groceryProducts.length-1} key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
}

export default CartSummary;
