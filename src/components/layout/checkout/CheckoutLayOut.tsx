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
import { getCard } from "@/lib/api/checkout";
import { checkout } from "@/lib/api/checkout";
import { useState } from "react";

type schemaType = z.infer<typeof schema>;

const schema = z.object({
  delivery_type: z.enum(["pickup", "delivery"], {
    message: "Please select delivery type",
  }),
  delivery_speed: z.enum(["Priority", "Standard"], {
    message: "Please select delivery speed",
  }),
  notes: z.string().optional(),
  address_id: z.number({
    message: "address is required",
  }),
  payment_method: z.enum(["cash_on_delivery", "card"], {
    message: "Please select your  payment method",
  }),
  amount: z.number().optional(),
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
        delivery_type: undefined,
        delivery_speed: undefined,
        notes: "",
        address_id: undefined,
      },
    });

  const [addres, setaddres] = useState();
  const [order, setorder] = useState();
  const [submitLoding, setsubmitLoding] = useState(false);

  const onSubmit: SubmitHandler<schemaType> = async (data) => {
    setsubmitLoding(true);
    const response = await checkout(data);
    console.log(response);
    if (response.success) {
      setorder(response.data);
      setsubmitLoding(false);
      navigat("/checkout/3");
    }
    setsubmitLoding(false);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    if (cartData?.total) {
      setValue("amount", cartData.total);
    }
  }, [data, setValue]);

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
              submitLoding,
              order,
              addres,
              setaddres,
            }}
          />
        </form>
      )}
    </div>
  );
}

export default CheckoutLayOut;
