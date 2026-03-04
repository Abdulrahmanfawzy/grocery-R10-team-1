import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Grocery Store
          </Link>
          <div className="flex gap-6">
            <Link
              to="/category"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Category
            </Link>
            <Link
              to="/test"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Test
            </Link>
            <Link
              to="/checkout-1"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
