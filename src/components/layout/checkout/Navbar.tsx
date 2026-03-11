import "../../../index.css";
import { useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();

  const step = location.pathname.split("/")[2] || "1";

  return (
    <div>
      <h1 className=" text-sm text-gray-500">
        Home/Fresh Products/Cart/Checkout
        <span className=" ml-1 font-medium text-DarkBlue-color ">
          (shipping)
        </span>
      </h1>
      <div className=" w-[80%] md:w-[60%] my-9 lg:w-[50%] mx-auto  flex items-center justify-center gap-1">
        <div className=" flex flex-col items-center">
          <div className=" w-8 h-8 rounded-full background-DarkBlue-color text-white flex items-center justify-center">
            1
          </div>
          <h2>Shipping</h2>
        </div>
        <div
          className={`flex-1 ${step == "2" || step == "3" ? "background-DarkBlue-color" : "bg-gray-400"} mx-2 mt-4`}
          style={{ height: "2px" }}
        ></div>
        <div className=" flex flex-col items-center">
          <div
            className={` w-8 h-8 rounded-full ${step == "2" || step == "3" ? "background-DarkBlue-color" : "bg-gray-400"} text-white flex items-center justify-center`}
          >
            2
          </div>
          <h2>Payment</h2>
        </div>
        <div
          className={`flex-1 ${step == "3" ? "background-DarkBlue-color" : "bg-gray-400"} mx-2 mt-4`}
          style={{ height: "2px" }}
        ></div>
        <div className=" flex flex-col items-center">
          <div
            className={` w-8 h-8 rounded-full ${step == "3" ? "background-DarkBlue-color" : "bg-gray-400"} text-white flex items-center justify-center`}
          >
            3
          </div>
          <h2>Review</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
