import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import "../../../index.css";
import { useNavigate } from "react-router-dom";

const base_url = "https://grocery.newcinderella.online";
const token = "302|yKvAC8mnzKFnykaa8QmiUV9k9k7A0ljsJnW5sfFT74b2ba5e";

async function getCard() {
  try {
    const response = await fetch(`${base_url}/api/cart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

type schemaType = z.infer<typeof schema>;

const schema = z.object({
  deliveryOption: z.enum(["pickup", "delivery"], {
    message: "Please select delivery option",
  }),
  deliverySpeed: z.enum(["Priority", "Standard"], {
    message: "Please select delivery speed",
  }),
  specialNotes: z.string().optional(),
  address_id: z.number("address is requerd "),

  payment_method: z.enum(["cash_on_delivery", "card"], {
    message: "Please select your  payment method",
  }),
});

function CheckoutLayOut() {
  const navigat = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCard,
  });

  const cartData = data?.data;

  const { register, handleSubmit, formState, setValue, getValues, trigger } =
    useForm<schemaType>({
      resolver: zodResolver(schema),
      defaultValues: {
        deliveryOption: undefined,
        deliverySpeed: undefined,
        specialNotes: "",
        address_id: undefined,
      },
    });

  const onSubmit: SubmitHandler<schemaType> = (data) => {
    console.log("Form Data:", data);
    navigat("/checkout/3");
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  if (isError) {
    return (
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto p-4">
        <Navbar />
        <p className="text-red-500">Error: {(error as Error).message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl 2xl:max-w-6xl mx-auto p-4">
      <Navbar />
      {isLoading ? (
        <div className=" h-96 flex items-center justify-center">
          <Spinner className=" size-10 text-DarkBlue-color" />
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Outlet
            context={{
              onSubmit,
              setValue,
              getValues,
              formState,
              register,
              trigger,
              cartData,
            }}
          />
        </form>
      )}
    </div>
  );
}

export default CheckoutLayOut;
