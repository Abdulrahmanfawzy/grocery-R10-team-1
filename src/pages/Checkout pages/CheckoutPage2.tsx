import CartSummary from "./checkoutComponents/CartSummary";
import PaymentSummery from "./checkoutComponents/PaymentSummery";
import "../../index.css";

function CheckoutPage2() {
  return (
    <div className=" min-h-screen container  pt-2  w-[95%] md:w-[90%]  mx-auto mb-4 ">
      <div className="  w-full pl-6 bg-white border border-gray-300 rounded-md p-6 mb-7">
        <h2 className=" text-xl font-medium mb-2 text-gray-700">
          payment Method
        </h2>
        <div className=" grid grid-cols-2 md:grid-cols-4 mt-5 gap-5 ">
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
          </div>
        </div>
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
