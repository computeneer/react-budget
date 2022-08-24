import ICategory from "../../models/ICategory";
import { getRequest } from "./api";

export const getAllCategories = (): Promise<ICategory[]> => {
  return getRequest<ICategory[]>("categories");
};
