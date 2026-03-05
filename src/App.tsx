import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import CheckoutPage1 from "./pages/Checkout pages/CheckoutPage1";
import CheckoutPage2 from "./pages/Checkout pages/CheckoutPage2";
import CheckoutPage3 from "./pages/Checkout pages/CheckoutPage3";
<<<<<<< HEAD
import CardPage from "./pages/CardPage";
=======
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
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import CategoryPage from "./pages/Category/CategoryPage";
<<<<<<< HEAD
import CartPage from "./pages/CartPage";
>>>>>>> 2e8e42d99014b7ce91569952883f98231df7f21a
import ProductList from "./product-list/productlist";
=======
import Home from "./pages/Home";
>>>>>>> ali

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
<<<<<<< HEAD
<<<<<<< HEAD
          index: true,
=======
=======
          path: "/",
          element: <Home />,
        },
        {
>>>>>>> 21dcaf69516ef1fcf2c29e1c5500b3b1b4a66130
          path: "category",
          element: <CategoryPage />,
        },
        {
          path: "products",
>>>>>>> 2e8e42d99014b7ce91569952883f98231df7f21a
          element: <ProductList />,
        },
        {
          path: "checkout-1",
          element: (
            <ProtectedRoute>
              <CheckoutPage1 />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout-2",
          element: (
            <ProtectedRoute>
              <CheckoutPage2 />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout-3",
          element: (
            <ProtectedRoute>
              <CheckoutPage3 />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          ),
        },

        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "info",
              element: <PersonalInfo />,
            },
            {
              path: "orders-history",
              element: <OrderHistory />,
            },
            {
              path: "payments-wallet",
              element: <Wallet />,
            },
            {
              path: "smart-list",
              element: <SmartList />,
            },
            {
              path: "addresses",
              element: <Addresses />,
            },
            {
              path: "loyalty",
              element: <Loyalty />,
            },
            {
              path: "security",
              element: <Security />,
            },
            {
              path: "support",
              element: <Support />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
