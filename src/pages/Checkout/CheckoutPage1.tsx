import "../../index.css";
import CartSummary from "./checkoutComponents/CartSummary";
import CustomizeDelivery from "./checkoutComponents/CustomizeDelivery";
import PaymentSummery from "./checkoutComponents/PaymentSummery";
import { Input } from "@/components/ui/input";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CheckoutPage1() {
  const { trigger, getValues, setValue, formState, register } =
    useOutletContext();

  const navigate = useNavigate();

  async function ContinueCheckout() {
    const valid = await trigger([
      "address_id",
      "deliveryOption",
      "deliverySpeed",
    ]);

    if (valid) {
      console.log(valid);
      navigate("/checkout/2");
    }
  }

  return (
    <div className=" min-h-screen container  pt-2  w-[95%] md:w-[90%]  mx-auto ">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16">
        <div className=" flex flex-col gap-5">
          <CustomizeDelivery
            register={register}
            setValue={setValue}
            formState={formState}
          />
          <div className=" mt-3">
            <h2 className=" text-gray-800 font-sans text-lg mb-1">
              Special Notes
            </h2>
            <Input
              {...register("specialNotes")}
              aria-invalid={!!formState.errors.specialNotes}
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="input text ......... "
            />
            {formState.errors.specialNotes?.message && (
              <p role="alert" className="text-red-500 text-xs mt-1">
                {formState.errors.specialNotes?.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <h2 className=" text-gray-800 font-sans text-lg mb-1 ">
            Cart Summary
          </h2>
          <div className=" border border-gray-300 rounded-md pt-1">
            <CartSummary />
            <div className=" px-5 py-3 border-t border-gray-400 ">
              <PaymentSummery />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={ContinueCheckout}
        className=" px-4 h-12 background-DarkBlue-color rounded-md text-white my-4 "
        type="button"
      >
        Continue Checkout
      </button>
    </div>
  );
}

export default CheckoutPage1;
