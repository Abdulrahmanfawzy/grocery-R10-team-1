import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute/ProtectedRoute";
import ProfileLayout from "./components/layout/profileLayout/ProfileLayout";
import Dashboard from "./pages/profile/Dashboard";
import PersonalInfo from "./pages/profile/PersonalInfo";
import Wallet from "./pages/profile/Wallet";
import OrderHistory from "./pages/profile/OrderHistory";

const App = () => {
    const routers = createBrowserRouter([
    {path : '' , element : <ProfileLayout/> , children : 
      [
      {path : "dashboard" , element : <ProtectedRoute><Dashboard/></ProtectedRoute>},
      { path: 'info', element: <ProtectedRoute><PersonalInfo/></ProtectedRoute> },
      { path: 'payments-wallet', element: <ProtectedRoute><Wallet/></ProtectedRoute> },
      { path: 'order-history', element: <ProtectedRoute><OrderHistory/></ProtectedRoute> },
    ]
    }
      
    ])
    
  return (
    <div>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )

};

export default App;
