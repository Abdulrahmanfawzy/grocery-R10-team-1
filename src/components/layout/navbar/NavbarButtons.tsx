import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarButtons = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Link
        to="/cart"
        className="flex items-center gap-1  text-sm cursor-pointer hover:text-primary transition-colors"
      >
        <ShoppingCart size={20} />
        <span className=" hidden 2xl:block">MyCart</span>
      </Link>
      <Link to="/profile">
        <Button
          size="sm"
          className="px-2 text-sm text-primary-foreground bg-primary cursor-pointer hover:bg-main-dark max-w-24"
        >
          Ali's Profile
        </Button>
      </Link>
    </div>
  );
};

export default NavbarButtons;
