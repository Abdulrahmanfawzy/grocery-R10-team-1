import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function CheckoutLayOut() {
  return (
    <div className="max-w-5xl 2xl:max-w-6xl mx-auto p-4">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default CheckoutLayOut;
