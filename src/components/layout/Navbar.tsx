import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import { DummyNavBarLinks } from "../data/mocData";

const Navbar = () => {
  const navbarLinks = DummyNavBarLinks;
  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            <Logo />
          </Link>
          <div className="flex gap-6">
            {navbarLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-primary hover:text-grey-900 font-semibold duration-300 flex"
              >
                <link.icon className="w-5 h-5" />
                <span className="ml-1">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
