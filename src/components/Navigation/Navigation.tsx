import React from "react";
import { useAppSelector } from "redux/settings/hooks";
import NavigationItem, { INavigationItem } from "./NavitationItem";

type NavigationProps = {
  navigations: INavigationItem[];
};

const Navigation: React.FC<NavigationProps> = ({ navigations }) => {
  const { isAuthenticated } = useAppSelector((store) => store.authReducer);
  return (
    <nav className="nav">
      {navigations &&
        navigations.map((navigation, index) => (
          <NavigationItem
            key={index}
            text={navigation.text}
            to={navigation.to}
          />
        ))}
      <NavigationItem
        to={!isAuthenticated ? "/login" : "/logout"}
        text={!isAuthenticated ? "Login" : "Logout"}
      />
    </nav>
  );
};

export default Navigation;
