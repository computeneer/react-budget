import React from "react";
import sideNavigations from "data/side_navigations";
import SideNavItem from "./SideNavItem";

type SideNavigationProps = {};

const SideNavigation: React.FC<SideNavigationProps> = () => {
  return (
    <nav>
      {sideNavigations &&
        sideNavigations.map((nav) => <SideNavItem item={nav} key={nav.text} />)}
    </nav>
  );
};

export default SideNavigation;
