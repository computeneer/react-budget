import SideNavigation from "components/Navigation/SideNavigation";
import GeneralReport from "pages/Home/GeneralReport";
import React from "react";
import styles from "styles/home.module.scss";
type HomeLayoutProps = {};

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <SideNavigation />
      </div>
      <GeneralReport />
    </div>
  );
};

export default HomeLayout;
