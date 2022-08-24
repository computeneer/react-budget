import React from "react";
import { Outlet } from "react-router-dom";

type AuthLayoutProps = {};

const AuthLayout: React.FC<AuthLayoutProps> = (props: AuthLayoutProps) => {
  return (
    <div>
      AuthLayout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
