import { Navigate } from "react-router-dom";
import { useToken } from "@/hooks/useToken";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { token } = useToken();

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
}
