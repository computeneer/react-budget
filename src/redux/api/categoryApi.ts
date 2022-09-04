import ICategory from "../../models/ICategory";
import { getRequest } from "./api";

export const getAllCategories = () => {
  return getRequest<ICategory[]>("categories");
};
