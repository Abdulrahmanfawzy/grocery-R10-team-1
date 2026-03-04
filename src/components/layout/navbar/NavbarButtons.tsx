import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const NavbarButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1 px-2 text-sm cursor-pointer ">
        <ShoppingCart size={24} />
        MyCart
      </button>
      <Button
        size="sm"
        className="px-2 text-sm text-primary-foreground bg-primary cursor-pointer hover:bg-main-dark"
      >
        Sign Up
      </Button>
    </div>
  );
};

export default NavbarButtons;
