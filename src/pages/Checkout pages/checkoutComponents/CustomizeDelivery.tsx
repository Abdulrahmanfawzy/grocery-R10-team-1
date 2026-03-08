import { Car, MotorbikeIcon, TimerIcon } from "lucide-react";
import { Input } from "@/components/ui/input";


import "../../../index.css";

type Props = {
  register: any;
  formState: any;
};


function CustomizeDelivery({ register, formState }: Props) {
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

        <div className="mt-3">
          <div>
            <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
              Address
            </h2>
            <div>
              <Input
                aria-invalid={!!formState.errors.address}
                {...register("address")}
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder=" Villa 14, Street 23, District 5, New Cairo, Cairo 11835 "
              />
              {formState.errors.address?.message && (
                <p
                  id="specialNotes-error"
                  role="alert"
                  className="text-red-500 text-xs mt-1"

                >
                  {formState.errors.address?.message}
                </p>
              )}
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">City</h2>
              <div>
                <Input
                {...register("city")}
                  aria-invalid={!!formState.errors.city}
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="New Cairo"
                />
                {formState.errors.city?.message && (
                  <p
                    id="specialNotes-error"
                    role="alert"
                    className="text-red-500 text-xs mt-1"
                  >
                    {formState.errors.city?.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                rovenance
              </h2>
              <div>
                <Input
                {...register("rovenance")}
                  aria-invalid={!!formState.errors.rovenance}
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="Cairo"
                />
                {formState.errors.rovenance?.message && (
                  <p
                    id="specialNotes-error"
                    role="alert"
                    className="text-red-500 text-xs mt-1"
                  >
                    {formState.errors.rovenance?.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                Postal Code
              </h2>
              <div>
                <Input
                {...register("postalCode")}
                  aria-invalid={!!formState.errors.postalCode}
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"
                  placeholder="11835"
                />
                {formState.errors.postalCode?.message && (
                  <p
                    id="specialNotes-error"
                    role="alert"
                    className="text-red-500 text-xs mt-1"
                  >
                    {formState.errors.postalCode?.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
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

//
//
//
// Provenance
// Postal Code
// Schedule Delivery
// Deliver Now
// Deliver Later
// Delivery Speed
// Standard
// Priority
// Estimated Arrival
// 45 Min, 30/1/25 at 2:30 PM

export default CustomizeDelivery;
