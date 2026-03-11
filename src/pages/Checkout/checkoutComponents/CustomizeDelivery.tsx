import { Car, MotorbikeIcon, TimerIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import "../../../index.css";
import { getAddresses } from "@/lib/api/checkout";
import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";

function CustomizeDelivery() {
  const { setValue, formState, register , setaddres  } = useOutletContext();

  const [selectedAddresses, setselectedAddresses] = useState(0);

  const { data , isLoading } = useQuery({
    queryKey: ["getUserAddresses"],
    queryFn: getAddresses,
  });

  console.log(data)

  useEffect(() => {
    if (!isLoading && data.data?.[selectedAddresses]) {
      setValue("address_id", data.data[selectedAddresses].id);
      setaddres ( data.data[selectedAddresses].full_name)
    }
  }, [selectedAddresses, data, isLoading, setValue]);

  function decrease() {
    if (selectedAddresses > 0) {
      setselectedAddresses(selectedAddresses - 1);
    }
  }

  function increase() {
    if ( selectedAddresses < data.data.length - 1) {
      setselectedAddresses(selectedAddresses + 1);
    }
  }

  return (
    <div>
      <h2 className=" text-gray-800 font-sans text-lg mb-1 ">
        Customize Your Delivery
      </h2>
      <div className=" w-full p-6 bg-white border border-gray-300 rounded-md flex flex-col gap-3 py-4">
        <div>
          <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
            Fulfilment Method
          </h2>
          <div>
            <div className="flex items-center gap-5 ">
              <label className="flex items-center gap-2 cursor-pointer">
                <Input
                  {...register("delivery_type")}
                  type="radio"
                  name="delivery_type"
                  value="pickup"
                  className="w-5 h-5 "
                  style={{ accentColor: "#014162" }}
                />
                <Car size={20} /> Pick Up
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <Input
                  {...register("delivery_type")}
                  type="radio"
                  name="delivery_type"
                  value="delivery"
                  className="w-5 h-5 "
                  style={{ accentColor: "#014162" }}
                />
                <MotorbikeIcon size={20} /> Delivery
              </label>
            </div>
            {formState.errors.delivery_type?.message && (
              <p
                id="specialNotes-error"
                role="alert"
                className="text-red-500 text-xs mt-1"
              >
                {formState.errors.delivery_type?.message}
              </p>
            )}
          </div>
        </div>

        {isLoading ? (
          <div>
            <div className="mt-3">
              <div>
                <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                  Address
                </h2>
                <Skeleton className="w-full text-gray-300  p-2 rounded">
                  loding ..
                </Skeleton>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                  <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                    City
                  </h2>
                  <Skeleton className="w-full text-gray-300  p-2 rounded">
                    loding ..
                  </Skeleton>
                </div>
                <div>
                  <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                    street address
                  </h2>
                  <Skeleton className="w-full text-gray-300  p-2 rounded">
                    loding ..
                  </Skeleton>
                </div>
              </div>
            </div>
          </div>
        ) : data.data?.length > 0 ? (
          <div className="mt-3">
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                Address
              </h2>
              <div className="w-full border border-gray-300 p-2 rounded">
                {data.data[selectedAddresses]?.full_name || "not found"}
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div>
                <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                  City
                </h2>
                <div className="w-full border border-gray-300 p-2 rounded">
                  {data.data[selectedAddresses]?.city || "not found"}
                </div>
              </div>
              <div>
                <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                  street address
                </h2>
                <div className="w-full border border-gray-300 p-2 rounded">
                  {data.data[selectedAddresses]?.street_address || "not found"}
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between text-DarkBlue-color mt-2 ">
              <div className=" flex items-center justify-center gap-3">
                <svg
                  onClick={decrease}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>

                <p className=" border p-0.5 border-gray-600 rounded-sm w-9 text-center">
                  {selectedAddresses + 1}
                </p>

                <svg
                  onClick={increase}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              <Link to="/profile/addresses" className=" text-sm text-blue-500">
                creat other Addresses{" "}
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 className=" text-lg font-thin text-DarkBlue-color">
              you don't have an address
            </h2>
            <Link
              to="/profile/addresses"
              className=" text-sm text-blue-500 text-left"
            >
              creat Addresses{" "}
            </Link>
          </div>
        )}
        {formState.errors.address_id?.message && (
          <p
            id="specialNotes-error"
            role="alert"
            className="text-red-500 text-xs mt-1"
          >
            {formState.errors.address_id?.message}
          </p>
        )}

        <div className="mt-3">
          <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
            Delivery Speed
          </h2>
          <div className="flex items-center gap-5 ">
            <label className="flex items-center gap-2 cursor-pointer">
              <Input
                {...register("delivery_speed")}
                type="radio"
                name="delivery_speed"
                value="Standard"
                className="w-5 h-5 "
                style={{ accentColor: "#014162" }}
              />
              <TimerIcon size={20} /> Standard
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Input
                {...register("delivery_speed")}
                type="radio"
                name="delivery_speed"
                value="Priority"
                className="w-5 h-5 "
                style={{ accentColor: "#014162" }}
              />
              <MotorbikeIcon size={20} />
              Priority
            </label>
          </div>
          {formState.errors.delivery_speed?.message && (
            <p
              id="specialNotes-error"
              role="alert"
              className="text-red-500 text-xs mt-1"
            >
              {formState.errors.delivery_speed?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomizeDelivery;
