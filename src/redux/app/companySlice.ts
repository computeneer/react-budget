import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICompanyState from "redux/states/ICompanyState";
import { extraReducers } from "redux/thunks/companyThunks";

const initialState: ICompanyState = {
  hasError: false,
  incomesCount: 0,
  incomesTotal: 0,
  isLoading: false,
  isSuccessfull: false,
  paymentsCount: 0,
  paymentsTotal: 0,
  requiresReload: true,
  total: 0,
  error: undefined,
  companyCode: sessionStorage.getItem("companyCode") ?? "",
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanyCode: (state, action: PayloadAction<string>) => {
      state.companyCode = action.payload;
    },
    setRequireReload: (state) => {
      state.requiresReload = true;
    },
  },
  extraReducers,
});

export const { setCompanyCode, setRequireReload } = companySlice.actions;
export default companySlice.reducer;
