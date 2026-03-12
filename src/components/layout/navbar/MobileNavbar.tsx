import Logo from "@/components/common/Logo";
import { useState } from "react";
import NavbarButtons from "./NavbarButtons";
import NavbarLinks from "./NavbarLinks";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between gap-4 lg:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-gray-100"
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 border-t pt-4">
          <NavbarLinks className="flex-col space-y-4 items-start" />

          <NavbarButtons className="flex-col gap-4 items-start" />
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
