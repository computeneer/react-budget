import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { getAllCategories } from "../api/categoryApi";
import ICategoryState from "../states/ICategoryState";
import ICategory from "../../models/ICategory";

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async () => {
    const result = getAllCategories()
      .then((res) => res)
      .catch((err) => err);
    return result;
  }
);

export const extraReducers = (
  builder: ActionReducerMapBuilder<ICategoryState>
) => {
  builder
    .addCase(fetchAllCategories.pending, (state) => {
      state.isLoading = true;
      state.isSuccessfull = false;
      state.hasError = false;
      state.error = "";
    })
    .addCase(
      fetchAllCategories.fulfilled,
      (state: ICategoryState, action: PayloadAction<ICategory[]>): void => {
        state.isLoading = false;
        state.isSuccessfull = true;
        state.hasError = false;
        state.error = "";
        state.categories = action.payload;
      }
    )
    .addCase(fetchAllCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccessfull = false;
      state.hasError = true;
      state.error = action.payload as string;
      state.selectedCategories = [];
    });
};
