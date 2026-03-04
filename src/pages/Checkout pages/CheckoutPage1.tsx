import "../../index.css";
import ShippingNavBar from "./checkoutComponents/ShippingNavBar";
import ContactInformation from "./checkoutComponents/ContactInformation";
import CartSummary from "./checkoutComponents/CartSummary";

function CheckoutPage1() {

  return (
    
    <div className=" min-h-screen container  pt-2  w-[95%] md:w-[90%]  mx-auto ">
      <h1 className=" text-sm text-gray-500">
        Home/Fresh Products/Cart/Checkout
        <span className=" Color/main ml-1 font-medium text-DarkBlue-color ">
          (shipping)
        </span>
      </h1>
      <ShippingNavBar />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactInformation />
        <CartSummary/>
      </div>
    </div>
  );
}

export default CheckoutPage1;
