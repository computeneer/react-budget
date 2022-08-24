import React from "react";
import { NavLink } from "react-router-dom";

export interface INavigationItem {
  to: string;
  text: string;
}

const NavigationItem: React.FC<INavigationItem> = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
    >
      {text}
    </NavLink>
  );
};

export default NavigationItem;
