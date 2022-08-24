import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../app/categorySlice";
import authReducer from "../app/authSlice";
import companyReducer from "../app/companySlice";

const store = configureStore({
  reducer: {
    categoryReducer,
    authReducer,
    companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
