import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PublicRoute from "./components/common/PublicRoute";
import LoginPage from "./pages/authorization/login/LoginPage";
import SignUpPage from "./pages/authorization/signup/SignUpPage";
import MainLayout from "./components/layout/MainLayout";
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
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductList from "./product-list/productlist";
import CheckoutLayOut from "./components/layout/checkout/CheckoutLayOut";
import CheckoutPage1 from "./pages/Checkout/CheckoutPage1";
import CheckoutPage2 from "./pages/Checkout/CheckoutPage2";
import CheckoutPage3 from "./pages/Checkout/CheckoutPage3";
import ListItems from "./pages/profile/ListItems";

function App() {
  const queryClient = new QueryClient();
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      ),
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
          path: "checkout",
          element: <CheckoutLayOut />,
          children: [
            {
              index: true,
              element: <CheckoutPage1 />,
            },
            {
              path: "2",
              element: <CheckoutPage2 />,
            },
            {
              path: "3",
              element: <CheckoutPage3 />,
            },
          ],
        },
        {
          path: "cart",
          element: <CartPage />,
        },

        {
          path: "profile",
          element: <ProfileLayout />,
          children: [
            { index: true, element: <Dashboard /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "personal-info", element: <PersonalInfo /> },
            { path: "order-history", element: <OrderHistory /> },
            { path: "wallet", element: <Wallet /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "info", element: <PersonalInfo /> },
            { path: "orders-history", element: <OrderHistory /> },
            { path: "payments-wallet", element: <Wallet /> },
            { path: "smart-list", element: <SmartList /> },
            { path: "list-items/:id", element: <ListItems /> },
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
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
    {
      path: "signup",
      element: (
        <PublicRoute>
          <SignUpPage />
        </PublicRoute>
      ),
    },
  ]);

  return (
    <div className="overflow-x-hidden">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#4ade80",
                secondary: "#fff",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}

export default App;
