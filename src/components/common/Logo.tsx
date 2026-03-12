import { Link } from "react-router-dom";
import LogoImg from "@/assets/home/logo.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoImg} alt="Logo" className="h-7.5 w-auto" />
    </Link>
  );
};

export default Logo;
