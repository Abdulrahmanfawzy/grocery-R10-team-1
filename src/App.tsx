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
import CategoryPage from "./pages/Category/CategoryPage";
import CartPage from "./pages/CartPage";
import ProductList from "./product-list/productlist";
import Home from "./pages/Home";
import LoginPage from "./pages/authorization/login/LoginPage";
import SignUpPage from "./pages/authorization/signup/SignUpPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner";

function App() {
  const queryClient = new QueryClient();
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
          path: "products",
          element: <ProductList />,
        },
        {
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
          path: "cart",
          element: <CartPage />,
        },

        {
          path: "profile",
          element: <ProfileLayout />,
          children: [
            { path: "dashboard", element: <Dashboard />, index: true },
            { path: "info", element: <PersonalInfo /> },
            { path: "orders-history", element: <OrderHistory /> },
            { path: "payments-wallet", element: <Wallet /> },
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
    {
      path: "signin",
      element: <LoginPage />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
  ]);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#fff",
              color: "#111",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              fontWeight: "500",
            },
          }}
        />
        <RouterProvider router={routers} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
