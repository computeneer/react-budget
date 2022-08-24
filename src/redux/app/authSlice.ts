import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAuthState from "redux/states/IAuthState";
import { extraReducers } from "redux/thunks/authThunks";

const initialState: IAuthState = {
  isAuthenticated: sessionStorage["token"] ? true : false,
  isLoading: false,
  token: sessionStorage["token"] ?? undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // TODO : PAYLOAD ACTION TYPE WILL BE FIXED
    authenticate: (state, action: PayloadAction<{ token: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      // TODO: STATE.USER WILL BE WRITTEN TO STATE
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = undefined;
      state.user = undefined;
      sessionStorage.removeItem("token");
    },
  },
  extraReducers,
});

export const { authenticate, logout } = authSlice.actions;

export default authSlice.reducer;
