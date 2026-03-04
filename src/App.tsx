import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import CategoryPage from "./pages/Category/CategoryPage";
import Test from "./pages/Test";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/category",
          element: <CategoryPage />,
        },
        {
          path: "test",
          element: <Test />,
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
