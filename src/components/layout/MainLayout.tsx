import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
