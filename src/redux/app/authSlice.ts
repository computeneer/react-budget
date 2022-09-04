import { ITokenResponse } from "./../../models/IResponse";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAuthState from "redux/states/IAuthState";
import { extraReducers } from "redux/thunks/authThunks";

const initialState: IAuthState = {
  isAuthenticated: sessionStorage["token"] ? true : false,
  isLoading: false,
  token: sessionStorage["token"] ?? undefined,
  user: sessionStorage["user"] ? JSON.parse(sessionStorage["user"]) : undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<ITokenResponse>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = {
        username: action.payload.username!,
        email: action.payload.email || "",
        avatar: action.payload.avatar || "",
      };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = undefined;
      state.user = undefined;
      sessionStorage.removeItem("token");
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.user = {
        username: action.payload,
        email: "",
        avatar: "",
      };
    },
  },
  extraReducers,
});

export const { authenticate, logout, setUsername } = authSlice.actions;

export default authSlice.reducer;
