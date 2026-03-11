import { Link } from "react-router-dom";
import { DummyNavBarLinks } from "../../data/mocData";

const NavbarLinks = ({ className = "" }: { className?: string }) => {
  return (
    <ul className={`flex  items-center space-x-4 ${className}`}>
      {DummyNavBarLinks.map((link) => {
        const Icon = link.icon;
        return (
          <li key={link.path}>
            <Link
              to={link.path}
              className="flex items-center text-md gap-1 hover:text-primary transition-colors "
            >
              <Icon size={20} />
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
