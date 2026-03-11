import NavSearchBar from "./NavSearchBar";
import Logo from "../../common/Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarButtons from "./NavbarButtons";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="bg-primary-foreground py-4">
      <header className="mx-auto max-w-5xl px-4 md:px-6 lg:px-10 2xl:max-w-6xl">
        {/* Desktop Navbar */}
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden  gap-4 lg:flex">
            <div className="flex items-center justify-between gap-4">
              <NavbarLinks />
              <NavSearchBar />
              <NavbarButtons />
            </div>
          </div>

          {/* Mobile Navbar */}
          <MobileNavbar />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
