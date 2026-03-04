import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div>
      <Navbar/>
      <div className="mt-10">
      <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
