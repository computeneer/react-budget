import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logout } from "redux/app/authSlice";
import { useAppDispatch } from "redux/settings/hooks";

type LogoutProps = {};

const Logout: React.FC<LogoutProps> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(logout());
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;
