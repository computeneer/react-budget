import { IPayment } from "models/IPayment";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPaymentState from "redux/states/IPaymentState";

const initialState: IPaymentState = {
  hasError: false,
  isLoading: false,
  isSuccessfull: false,
  payments: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPayment: (state, action: PayloadAction<IPayment>) => {
      state.payments.push(action.payload);
    },
    // TODO : PAYLOAD FIXLENECEK
    deletePayment: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.payments.findIndex(
        (p) => p._id === action.payload.id
      );
      if (index > -1) {
        state.payments.slice(index, 1);
      }
    },
  },
});

export const { addPayment, deletePayment } = paymentSlice.actions;

export default paymentSlice.reducer;
