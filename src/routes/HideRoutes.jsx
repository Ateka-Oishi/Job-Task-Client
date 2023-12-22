import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const HideAuthRoutes = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return children;
  }

  if (user) {
    return <Navigate to="/dashboard" replace></Navigate>;
  }

  return children;
};
