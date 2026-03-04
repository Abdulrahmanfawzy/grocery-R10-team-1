import { Home, LayoutDashboard } from "lucide-react";

const NavbarLinks = () => {
  return (
    <ul className="flex items-center space-x-4">
      <p className="flex items-center gap-1">
        <Home size={24} />
        Home
      </p>
      <p className="flex items-center gap-1">
        <LayoutDashboard size={24} />
        Categories
      </p>
    </ul>
  );
};

export default NavbarLinks;
