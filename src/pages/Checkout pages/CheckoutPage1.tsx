import "../../index.css";
import ContactInformation from "./checkoutComponents/ContactInformation";
import CartSummary from "./checkoutComponents/CartSummary";
import CustomizeDelivery from "./checkoutComponents/CustomizeDelivery";
import PaymentSummery from "./checkoutComponents/PaymentSummery";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";

const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),

  deliveryOption: z.enum(["pickup", "delivery"], {
    message: "Please select delivery option",
  }),

  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "required"),
  rovenance: z.string().min(1, "required"),
  postalCode: z.string().min(1, "required"),

  deliverySpeed: z.enum(["Priority", "Standard"], {
    message: "Please select delivery speed",
  }),

  specialNotes: z.string().optional(),
});

type schemaType = z.infer<typeof schema>;

function CheckoutPage1() {

  const navigate = useNavigate()


  const { register, handleSubmit, formState } = useForm<schemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      deliveryOption: undefined,
      address: "",
      city: "",
      rovenance: "",
      postalCode: "",
      deliverySpeed: undefined,
      specialNotes: "",
    },
  });

  const onSubmit: SubmitHandler<schemaType> = (data) => {
    console.log("Form Data:", data);
    navigate("/checkout/2")
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" min-h-screen container  pt-2  w-[95%] md:w-[90%]  mx-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-16">
          <div className=" flex flex-col gap-5">
            <ContactInformation register={register} formState={formState} />
            <CustomizeDelivery register={register} formState={formState} />
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
        <div className=" my-8">
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
        <button
          type="submit"
          className=" px-4 h-12 background-DarkBlue-color rounded-md text-white mb-4"
        >
          Continue Checkout
        </button>
      </div>
    </form>
  );
}

export default CheckoutPage1;
