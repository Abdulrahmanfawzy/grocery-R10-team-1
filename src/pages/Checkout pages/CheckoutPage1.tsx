import "../../index.css";
import ShippingNavBar from "./checkoutComponents/ShippingNavBar";
import ContactInformation from "./checkoutComponents/ContactInformation";
import CartSummary from "./checkoutComponents/CartSummary";
import SpecialNotes from "./checkoutComponents/SpecialNotes";
import CustomizeDelivery from "./checkoutComponents/CustomizeDelivery";
import PaymentCummery from "./checkoutComponents/PaymentCummery";
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

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16">
        <div className=" flex flex-col gap-5">
        <ContactInformation />
        <CustomizeDelivery />

        </div>
        <div>
          <CartSummary/>
          <PaymentCummery/>
        </div>
        

      </div>
      <SpecialNotes />
      <button className=" px-4 h-12 background-DarkBlue-color rounded-md text-white mb-4"> Continue Checkout</button>
    </div>
  );
}


export default CheckoutPage1;
