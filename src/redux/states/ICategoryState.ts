import ICategory from "../../models/ICategory";
import { IBaseState } from "./IBaseState";

interface ICategoryState extends IBaseState {
  categories: ICategory[];
  selectedCategories: ICategory[];
}

export default ICategoryState;
