import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICategory from "../../models/ICategory";
import ICategoryState from "../states/ICategoryState";

const initialState: ICategoryState = {
  categories: [],
  selectedCategories: [],
  hasError: false,
  isLoading: false,
  isSuccessfull: false,
  error: undefined,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories: (
      state: ICategoryState,
      action: PayloadAction<ICategory[]>
    ) => {
      state.categories = action.payload;
    },
    selectCategory: (
      state: ICategoryState,
      action: PayloadAction<ICategory>
    ) => {
      const isExists = state.selectedCategories.find(
        (e) => e._id === action.payload._id
      );
      if (isExists) {
        state.selectedCategories = state.selectedCategories.filter(
          (e) => e._id !== isExists._id
        );
      } else {
        state.selectedCategories.push(action.payload);
      }
    },
    clearCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { getCategories, selectCategory, clearCategories } =
  categorySlice.actions;

export default categorySlice.reducer;
