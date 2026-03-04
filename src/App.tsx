import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import CheckoutPage1 from "./pages/Checkout pages/CheckoutPage1";
import CheckoutPage2 from "./pages/Checkout pages/CheckoutPage2";
import CheckoutPage3 from "./pages/Checkout pages/CheckoutPage3";
import CardPage from "./pages/CardPage";

function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
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
          path: "card",
          element: (
            <ProtectedRoute>
              <CardPage />
            </ProtectedRoute>
          ),
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
