import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import CheckoutPage1 from "./pages/Checkout pages/CheckoutPage1";
import CheckoutPage2 from "./pages/Checkout pages/CheckoutPage2";
import CheckoutPage3 from "./pages/Checkout pages/CheckoutPage3";
<<<<<<< HEAD

=======
>>>>>>> c8ff959cb7e9663e9796f660c7c58d7c75c236d1
import Dashboard from "./pages/profile/Dashboard";
import PersonalInfo from "./pages/profile/PersonalInfo";
import OrderHistory from "./pages/profile/OrderHistory";
import Wallet from "./pages/profile/Wallet";
import SmartList from "./pages/profile/SmartList";
import Addresses from "./pages/profile/Addresses";
import Loyalty from "./pages/profile/Loyalty";
import ProfileLayout from "./components/layout/profileLayout/ProfileLayout";
import Security from "./pages/profile/Security";
import Support from "./pages/profile/Support";
import Settings from "./pages/profile/Settings";
import CategoryPage from "./pages/Category/CategoryPage";
<<<<<<< HEAD
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
=======
import CartPage from "./pages/CartPage";
import ProductList from "./product-list/productlist";
import Home from "./pages/Home";
>>>>>>> c8ff959cb7e9663e9796f660c7c58d7c75c236d1

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "category",
          element: <CategoryPage />,
        },
        {
<<<<<<< HEAD
=======
          path: "products",
          element: <ProductList />,
        },
        {
>>>>>>> c8ff959cb7e9663e9796f660c7c58d7c75c236d1
          path: "checkout-1",
          element: <CheckoutPage1 />,
        },
        {
          path: "checkout-2",
          element: <CheckoutPage2 />,
        },
        {
          path: "checkout-3",
          element: <CheckoutPage3 />,
        },
        {
<<<<<<< HEAD
          path: "product-details",
          element: <ProductDetails />,
=======
          path: "cart",
          element: <CartPage />,
>>>>>>> c8ff959cb7e9663e9796f660c7c58d7c75c236d1
        },
        {
          path: "profile",
          element: <ProfileLayout />,
          children: [
<<<<<<< HEAD
            { index: true, element: <Dashboard /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "personal-info", element: <PersonalInfo /> },
            { path: "order-history", element: <OrderHistory /> },
            { path: "wallet", element: <Wallet /> },
=======
            { path: "dashboard", element: <Dashboard /> },
            { path: "info", element: <PersonalInfo /> },
            { path: "orders-history", element: <OrderHistory /> },
            { path: "payments-wallet", element: <Wallet /> },
>>>>>>> c8ff959cb7e9663e9796f660c7c58d7c75c236d1
            { path: "smart-list", element: <SmartList /> },
            { path: "addresses", element: <Addresses /> },
            { path: "loyalty", element: <Loyalty /> },
            { path: "security", element: <Security /> },
            { path: "support", element: <Support /> },
            { path: "settings", element: <Settings /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
