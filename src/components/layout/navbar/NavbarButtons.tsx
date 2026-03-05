import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/cart"
        className="flex items-center gap-1 px-2 text-sm cursor-pointer hover:text-primary transition-colors"
      >
        <ShoppingCart size={24} />
        MyCart
      </Link>
      <Link to="/profile">
        <Button
          size="sm"
          className="px-2 text-sm text-primary-foreground bg-primary cursor-pointer hover:bg-main-dark"
        >
          Sarah's Profile
        </Button>
      </Link>
    </div>
  );
};

export default NavbarButtons;
