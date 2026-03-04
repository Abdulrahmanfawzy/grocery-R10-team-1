import NavSearchBar from "./NavSearchBar";
import Logo from "../../common/Logo";
import NavbarLinks from "./NavbarLinks";
import NavbarButtons from "./NavbarButtons";

const Navbar = () => {
  return (
    <div className="bg-primary-foreground py-4  ">
      <header className="max-w-5xl 2xl:max-w-6xl mx-auto px-10">
        <div className="flex gap-4 items-center justify-between">
          <Logo />
          <NavbarLinks />
          <NavSearchBar />
          <NavbarButtons />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
