import CartSummary from "./checkoutComponents/CartSummary";
import PaymentSummery from "./checkoutComponents/PaymentSummery";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import "../../index.css";



function CheckoutPage2() {
  const { setValue, formState, register } = useOutletContext();
  const [PaymentMethod, setPaymentMethod] = useState();

  function setPayment_method(method) {
    setValue("payment_method", method);
    setPaymentMethod(method);
  }

  return (
    <div className=" min-h-screen container  pt-2  w-[95%] md:w-[90%]  mx-auto mb-4 ">
      <div className="  w-full pl-6 bg-white border border-gray-300 rounded-md p-6 mb-7">
        <h2 className=" text-xl  font-medium mb-2 text-gray-700">
          payment Method
        </h2>
        <div className=" grid grid-cols-2 md:grid-cols-3 mt-5 gap-5 ">
          <div>
            <h2 className=" text-sm font-thin mb-2 text-gray-700">
              saved carde
            </h2>
            <div className="flex items-center gap-2 mt-3  border border-gray-300 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              <div className=" text-xs text-right text-gray-700">
                <h2>visa********123</h2>
                <h2>Expiers 12/3</h2>
              </div>
            </div>
            <div className=" flex items-center justify-center mt-3  border border-gray-300 rounded-md p-2">
              +add a new card
            </div>
          </div>
          <div>
            <h2 className=" text-sm font-thin mb-2 text-gray-700">
              other payment method
            </h2>
            <div
              onClick={() => setPayment_method("cash_on_delivery")}
              className={` ${PaymentMethod == "cash_on_delivery" ? "  border-DarkBlue-color shadow-xl" : "  border-gray-300 "} border cursor-pointer flex items-center gap-2 mt-3  rounded-md p-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-green-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <div>
                <h2 className=" text-sm font-medium text-gray-700">
                  Cash On Delivery
                </h2>
                <h2 className=" text-xs text-gray-700">
                  Pay When You Receive Your Order
                </h2>
              </div>
            </div>
          </div>
        </div>
        {formState.errors.payment_method?.message && (
          <p role="alert" className="text-red-500 text-xs mt-1">
            {formState.errors.payment_method?.message}
          </p>
        )}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16">
        <div>
          <h2 className=" text-gray-800 font-sans text-lg mb-1 ">
            Order Summary
          </h2>
          <div className=" border border-gray-300 rounded-md py-1">
            <CartSummary />
          </div>
        </div>

        <div>
          <h2 className=" text-gray-800 font-sans text-lg mb-1 ">
            Payment Summery
          </h2>
          <div className="  w-full p-6 bg-white border border-gray-300 rounded-md pt-3">
            <PaymentSummery />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" px-4 h-12 background-DarkBlue-color rounded-md text-white mb-4 mt-8 "
      >
        Confirm Payment & Go To Checkout
      </button>
    </div>
  );
}

export default CheckoutPage2;
