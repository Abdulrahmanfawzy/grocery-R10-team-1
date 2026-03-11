import CreatProductCart from "./creatProductCart";
import "../../../index.css"
import { useOutletContext } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
  quantityOrdered: number;
}

function CartSummary({cartData}) {

  
  return (

      <div className=" w-full bg-white  flex flex-col gap-3">
        <div className="  overflow-y-auto scrollbar-style max-h-96">
          {cartData.items.map((product , index ) => (
            <CreatProductCart islastProduct= {index === cartData.items.length-1} key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
}

export default CartSummary;
