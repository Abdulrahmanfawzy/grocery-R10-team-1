import { Link } from "react-router-dom";

import { menuItems } from "@/lib/constants/sideBar/MockData";
import { Crown } from "lucide-react";



function SideBar() {
  
  return (
    <>
      {/* Web  */}
      <aside className="w-75 h-fit hidden lg:block shrink-0 rounded-lg  border border-border ">
        {/* User Data  */}
        <div className="bg-card rounded-lg p-5 border-b">
          <div className="flex items-center gap-5 mb-6 ">
            <div className="w-20 h-20 rounded-full bg-muted relative">
              <img
                src="/public/ImageWithFallback.png"
                alt="User Photo"
                className="w-fit rounded-full"
              />
              <span
                className="absolute bottom-0 right-0 bg-[#F7FCFF] p-1
            rounded-full"
              >
                <Crown className=" text-yellow-400" />
              </span>
            </div>
            <div>
              <p className="font-semibold text-card-foreground">Sarah</p>
              <p className="text-sm text-primary font-medium">Gold Member</p>
            </div>
          </div>
        </div>
        {/* User Data  */}

        {/* Sub Routes  */}
        <nav className="py-2 flex flex-col gap-2">
          {menuItems.map((item) => {
             const isActive = location.pathname === item.path
            return(
            <Link
              to={item.path}
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-sidebar-foreground bg-[#F7FCFF] hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
            )
          })}
        </nav>
        {/* Sub Routes  */}
      </aside>
      {/* Web  */}
    </>
  );
}

export default SideBar;
