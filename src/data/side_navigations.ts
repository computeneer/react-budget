import { INavigationItem } from "components/Navigation/NavitationItem";

export const sideNavigations: INavigationItem[] = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Add Payment",
    to: "/payments/add-payment",
  },
  {
    text: "Add Income",
    to: "/incomes/add-income",
  },
  {
    text: "Users",
    to: "/users",
  },
  {
    text: "Add User",
    to: "/users/add-user",
  },
  {
    text: "Settings",
    to: "/settings",
  },
];

export default sideNavigations;
