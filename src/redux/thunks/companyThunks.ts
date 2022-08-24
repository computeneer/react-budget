import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ICompanyProfitData } from "models/ICompany";
import { getCompanyData } from "../api/companyApi;";
import ICompanyState from "../states/ICompanyState";
import { IResponse } from "models/IResponse";

export const fetchCompanyProfitData = createAsyncThunk(
  "companies/fetchCompanyProfitData",
  async (companyCode: string) => {
    const result = getCompanyData(companyCode)
      .then((res) => res)
      .catch((err) => err);
    return result;
  }
);

export const extraReducers = (
  builder: ActionReducerMapBuilder<ICompanyState>
) => {
  builder
    .addCase(fetchCompanyProfitData.pending, (state) => {
      state.isLoading = true;
      state.isSuccessfull = false;
      state.hasError = false;
      state.error = "";
      state.incomesCount = 0;
      state.incomesTotal = 0;
      state.paymentsCount = 0;
      state.paymentsTotal = 0;
      state.requiresReload = false;
      state.total = 0;
    })
    .addCase(
      fetchCompanyProfitData.fulfilled,
      (
        state: ICompanyState,
        action: PayloadAction<IResponse<ICompanyProfitData>>
      ): void => {
        const { incomeTotal, incomeCount, paymentTotal, paymenyCount, total } =
          action.payload.data!;
        state.isLoading = false;
        state.isSuccessfull = true;
        state.hasError = false;
        state.error = "";
        state.incomesCount = incomeCount;
        state.incomesTotal = incomeTotal;
        state.paymentsCount = paymenyCount;
        state.paymentsTotal = paymentTotal;
        state.requiresReload = false;
        state.total = total;
        //state.companyCode = companyCode;
      }
    )
    .addCase(fetchCompanyProfitData.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccessfull = false;
      state.hasError = true;
      state.error = action.payload as string;
    });
};
