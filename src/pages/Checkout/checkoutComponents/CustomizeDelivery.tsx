import { Car, MotorbikeIcon, TimerIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import "../../../index.css";

const base_url = "https://grocery.newcinderella.online";
const token = "302|yKvAC8mnzKFnykaa8QmiUV9k9k7A0ljsJnW5sfFT74b2ba5e";

async function getAddresses() {
  try {
    const response = await fetch(`${base_url}/api/addresses`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch addresses:", error);
  }
}

type Props = {
  register: any;
  formState: any;
};

function CustomizeDelivery({ register, formState, setValue }: Props) {
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loding, setloding] = useState(true);

  const [selectedAddresses, setselectedAddresses] = useState(0);

  useEffect(() => {
    async function fetchAddresses() {
      const data = await getAddresses();
      if (data.success) {
        setAddresses(data.data);
      } else {
        setAddresses(null);
      }
      setloding(false);
    }

    fetchAddresses();
  }, []);

  useEffect(() => {
    if (addresses[selectedAddresses]) {
      setValue("address_id", addresses[selectedAddresses].id);
    }
  }, [selectedAddresses, addresses]);

  function decrease() {
    if (selectedAddresses > 0) {
      setselectedAddresses(selectedAddresses - 1);
    }
  }

  function increase() {
    if (selectedAddresses < addresses.length - 1) {
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
                  {...register("deliveryOption")}
                  type="radio"
                  name="deliveryOption"
                  value="pickup"
                  className="w-5 h-5 "
                  style={{ accentColor: "#014162" }}
                />
                <Car size={20} /> Pick Up
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <Input
                  {...register("deliveryOption")}
                  type="radio"
                  name="deliveryOption"
                  value="delivery"
                  className="w-5 h-5 "
                  style={{ accentColor: "#014162" }}
                />
                <MotorbikeIcon size={20} /> Delivery
              </label>
            </div>
            {formState.errors.deliveryOption?.message && (
              <p
                id="specialNotes-error"
                role="alert"
                className="text-red-500 text-xs mt-1"
              >
                {formState.errors.deliveryOption?.message}
              </p>
            )}
          </div>
        </div>

        {loding ? (
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
        ) : addresses.length > 1 ? (
          <div className="mt-3">
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                Address
              </h2>
              <div className="w-full border border-gray-300 p-2 rounded">
                {addresses[selectedAddresses]?.full_name || "not found"}
              </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div>
                <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                  City
                </h2>
                <div className="w-full border border-gray-300 p-2 rounded">
                  {addresses[selectedAddresses]?.city || "not found"}
                </div>
              </div>
              <div>
                <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                  street address
                </h2>
                <div className="w-full border border-gray-300 p-2 rounded">
                  {addresses[selectedAddresses]?.street_address || "not found"}
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
                {...register("deliverySpeed")}
                type="radio"
                name="deliverySpeed"
                value="Standard"
                className="w-5 h-5 "
                style={{ accentColor: "#014162" }}
              />
              <TimerIcon size={20} /> Standard
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <Input
                {...register("deliverySpeed")}
                type="radio"
                name="deliverySpeed"
                value="Priority"
                className="w-5 h-5 "
                style={{ accentColor: "#014162" }}
              />
              <MotorbikeIcon size={20} />
              Priority
            </label>
          </div>
          {formState.errors.deliverySpeed?.message && (
            <p
              id="specialNotes-error"
              role="alert"
              className="text-red-500 text-xs mt-1"
            >
              {formState.errors.deliverySpeed?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CustomizeDelivery;
