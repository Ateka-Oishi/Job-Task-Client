import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export const HideAuthRoutes = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <span className="loading loading-spinner w-52 h-56"></span>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace></Navigate>;
  }

  return children;
};
