import "../../../index.css";

function ShippingNavBar() {
  return (
    <div className=" w-[80%] md:w-[60%] my-14 lg:w-[50%] mx-auto  flex items-center justify-center gap-1">
      <div className=" flex flex-col items-center">
        <div className=" w-8 h-8 rounded-full background-DarkBlue-color text-white flex items-center justify-center">
          1
        </div>
        <h2>Shipping</h2>
      </div>
      <div
        className="flex-1 bg-gray-400 mx-2 mt-4"
        style={{ height: "1px" }}
      ></div>
      <div className=" flex flex-col items-center">
        <div className=" w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
          2
        </div>
        <h2>Payment</h2>
      </div>
      <div
        className="flex-1 bg-gray-400 mx-2 mt-4"
        style={{ height: "1px" }}
      ></div>
      <div className=" flex flex-col items-center">
        <div className=" w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
          3
        </div>
        <h2>Review</h2>
      </div>
    </div>
  );
}

export default ShippingNavBar;
