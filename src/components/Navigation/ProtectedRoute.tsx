import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "redux/settings/hooks";

type ProtectedProps = {
  children: React.ReactNode;
  to?: string;
};

const ProtectedRoute: React.FC<ProtectedProps> = ({ children, to }) => {
  const { isAuthenticated } = useAppSelector((store) => store.authReducer);

  if (!isAuthenticated) return <Navigate to={to ?? "/login"} replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
