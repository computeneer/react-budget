import Navigation from "components/Navigation/Navigation";
import { navigations } from "data/navigations";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "styles/main.layout.module.scss";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation navigations={navigations} />

      <Outlet />
    </>
  );
};

export default MainLayout;
