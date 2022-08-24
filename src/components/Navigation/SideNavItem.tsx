import React from "react";
import { NavLink } from "react-router-dom";
import { INavigationItem } from "./NavitationItem";

type SideNavItemProps = {
  item: INavigationItem;
};

const SideNavItem: React.FC<SideNavItemProps> = ({ item }) => {
  const { text, to } = item;
  return (
    <NavLink className="sidebar-item" to={to}>
      {text}
    </NavLink>
  );
};

export default SideNavItem;
