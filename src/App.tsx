import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import CheckoutPage1 from "./pages/Checkout pages/CheckoutPage1";
import CheckoutPage2 from "./pages/Checkout pages/CheckoutPage2";
import CheckoutPage3 from "./pages/Checkout pages/CheckoutPage3";

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
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

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
          path: "product-details",
          element: <ProductDetails />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          ),
          children: [
            { index: true, element: <Dashboard /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "personal-info", element: <PersonalInfo /> },
            { path: "order-history", element: <OrderHistory /> },
            { path: "wallet", element: <Wallet /> },
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
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
