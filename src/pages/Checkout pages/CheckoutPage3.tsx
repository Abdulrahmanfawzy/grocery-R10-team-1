import ShippingNavBar from "./checkoutComponents/ShippingNavBar";
import CartSummary from "./checkoutComponents/CartSummary";
import PaymentCummery from "./checkoutComponents/PaymentCummery";
import i from "./image/file_00000000e21c722fab7ac08f0882d09d.png";
import "../../index.css";

const phone = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5 text-white "
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const chat = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5 text-white"
  >
    <path
      fillRule="evenodd"
      d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
      clipRule="evenodd"
    />
  </svg>
);

const star = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-5 text-yellow-500"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

function CheckoutPage3() {
  return (
    <div className=" min-h-screen container  pt-2  w-[95%] md:w-[90%]  mx-auto mb-4 ">
      <h1 className=" text-sm text-gray-500">
        Home/Fresh Products/Cart/Checkout
        <span className=" Color/main ml-1 font-medium text-DarkBlue-color ">
          (shipping)
        </span>
      </h1>
      <ShippingNavBar />
      <h2 className=" text-xl font-medium  text-gray-700 mb-2">Driver info</h2>
      <div className="  w-full pl-6 bg-white border border-gray-300 rounded-md p-6 mb-7">
        <div className=" flex justify-between ">
          <div className=" flex gap-3">
            <img className=" rounded-sm w-14 h-14" src={i} alt="" />
            <div className=" flex flex-col gap-2">
              <h2>moaaz hassan </h2>
              <div className=" flex gap-1">
                {star}
                {star}
                {star}
                {star}
              </div>
              <h2 className=" text-DarkBlue-color ">
                phton number{" "}
                <span className=" border rounded-sm p-1 text-gray-700 border-gray-400">
                  01032342
                </span>{" "}
              </h2>
            </div>
          </div>
          <div className=" flex gap-7 items-center h-full">
            <button className=" p-2 rounded-sm background-DarkBlue-color text-white flex items-center gap-1">
              {phone} phone
            </button>
            <button className=" p-2 rounded-sm background-DarkBlue-color  text-white flex items-center gap-1">
              {chat} chat{" "}
            </button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <CartSummary />
          <PaymentCummery />
        </div>
        <div>
          <h2 className=" text-xl font-medium  text-gray-700 mb-2">
            Order options
          </h2>
          <div className="  w-full pl-6 bg-white border border-gray-300 rounded-md p-6 mb-7">
            <h2 className=" text-sm font-thin text-gray-800 mb-2 ">
              Delivery Adress
            </h2>

            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder=" Villa 14, Street 23, District 5, New Cairo, Cairo 11835 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage3;
