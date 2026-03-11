import { Navigate } from "react-router-dom";
import { useToken } from "@/hooks/useToken";

interface PublicRouteProps {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const { token } = useToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
