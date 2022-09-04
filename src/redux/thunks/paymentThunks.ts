import { IErrorResponse } from "./../../models/IResponse";
import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IDataResponse } from "models/IResponse";
import IPaymentState from "redux/states/IPaymentState";
import { getAllPayments, createPayment } from "redux/api/paymentApi";
import { IPayment } from "models/IPayment";

export const fetchAllCompanyPayments = createAsyncThunk<
  IDataResponse<IPayment[]>,
  string,
  {
    rejectValue: IErrorResponse;
  }
>("payments/getAllPayment", async (companyCode: string) => {
  const result = getAllPayments(companyCode)
    .then((res) => res)
    .catch((err) => {
      throw new Error(`Could not get payments, error: ${err}`);
    });
  return result;
});

export const addPayment = createAsyncThunk<
  IDataResponse<IPayment>,
  IPayment,
  { rejectValue: IErrorResponse }
>("payments/createPayment", async (data: IPayment) => {
  const result = createPayment(data)
    .then((res) => res)
    .catch((err) => err);
  return result;
});

export const extraReducers = (
  builder: ActionReducerMapBuilder<IPaymentState>
) => {
  builder
    .addCase(fetchAllCompanyPayments.pending, (state: IPaymentState) => {
      state.error = undefined;
      state.hasError = false;
      state.isLoading = true;
      state.isSuccessfull = false;
    })
    .addCase(
      fetchAllCompanyPayments.fulfilled,
      (
        state: IPaymentState,
        action: PayloadAction<IDataResponse<IPayment[]>>
      ): void => {
        state.error = undefined;
        state.hasError = false;
        state.isLoading = false;
        state.isSuccessfull = true;
        state.payments = action.payload.data!;
      }
    )
    .addCase(
      fetchAllCompanyPayments.rejected,
      (state: IPaymentState, action) => {
        state.error = action.payload?.reason;
        state.hasError = true;
        state.isLoading = false;
        state.isSuccessfull = false;
      }
    );

  builder
    .addCase(addPayment.pending, (state) => {
      state.error = undefined;
      state.hasError = false;
      state.isLoading = true;
      state.isSuccessfull = false;
    })
    .addCase(
      addPayment.fulfilled,
      (
        state: IPaymentState,
        action: PayloadAction<IDataResponse<IPayment>>
      ) => {
        state.error = undefined;
        state.hasError = false;
        state.isLoading = false;
        state.isSuccessfull = true;
        state.payments.push(action.payload.data!);
      }
    )
    .addCase(addPayment.rejected, (state: IPaymentState, action) => {
      state.error = action.payload?.reason;
      state.hasError = true;
      state.isLoading = false;
      state.isSuccessfull = false;
    });
};
