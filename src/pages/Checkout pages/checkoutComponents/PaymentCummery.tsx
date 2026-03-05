import { currencyFormat } from "@/lib/utils/currencyFormat";
function PaymentCummery() {
  return (
    <div>
      <h2 className=" text-xl text-DarkBlue-color font-medium ">Total Amount</h2>
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
  );
}

export default PaymentCummery;
