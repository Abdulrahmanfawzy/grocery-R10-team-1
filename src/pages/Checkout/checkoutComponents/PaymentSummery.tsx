import { currencyFormat } from "@/lib/utils/currencyFormat";
import { useOutletContext } from "react-router-dom";
function PaymentSummery() {

  const { cartData} = useOutletContext();

  return (
    <div>
      <h2 className=" text-lg text-DarkBlue-color font-medium ">Total Amount</h2>
      <div className="">
        <div className=" mt-4 grid grid-cols-2 gap-3 border-b border-gray-500 pb-3 text-gray-600 ">
          <h2>Subtotal</h2>
          <h2>{currencyFormat(cartData.subtotal)}</h2>

          <h2>Shipping</h2>
          <h2>{currencyFormat(cartData.tax)}</h2>
        </div>
        <div className=" mt-4 grid grid-cols-2 gap-3 pt-3 text-gray-900 mb-6 ">
          <h2>Total</h2>
          <h2>{currencyFormat(cartData.total)}</h2>
        </div>
      </div>
    </div>
  );
}

export default PaymentSummery;
