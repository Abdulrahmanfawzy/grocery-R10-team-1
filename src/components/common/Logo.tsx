import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/src/assets/home/logo.svg"
        alt="Logo"
        className="h-7.5 w-auto"
      />
    </Link>
  );
};

export default Logo;
