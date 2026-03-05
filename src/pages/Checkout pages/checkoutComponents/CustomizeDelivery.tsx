import { Car, MotorbikeIcon } from "lucide-react";
import "../../../index.css";

function CustomizeDelivery() {
  return (
    <div className=" mt-2">
      <h2 className=" text-xl font-medium mb-2 text-gray-700">
        Customize Your Delivery
      </h2>
      <div className=" w-full p-6 bg-white border border-gray-300 rounded-md flex flex-col gap-3 py-7">
        <div className="">
          <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
            Fulfilment Method
          </h2>
          <div className="flex items-center gap-5">
            <div className=" bg-gray-300  flex items-center justify-center h-10 w-32 rounded-xl">
              <Car size={30} color="#014162" />
            </div>
            <div className=" bg-gray-300  flex items-center justify-center h-10 w-32 rounded-xl">
              <MotorbikeIcon size={30} color="#014162" />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
              Address
            </h2>
            <div className="flex items-center gap-5">
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder=" Villa 14, Street 23, District 5, New Cairo, Cairo 11835 "
              />
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                City
              </h2>
              <div className="flex items-center gap-5">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"

                />
              </div>
            </div>
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                rovenance
              </h2>
              <div className="flex items-center gap-5">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"

                />
              </div>
            </div>
            <div>
              <h2 className=" text-sm font-medium text-gray-700 mb-1 ">
                Postal Code
              </h2>
              <div className="flex items-center gap-5">
                <input
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded"

                />
              </div>
            </div>
          </div>
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
