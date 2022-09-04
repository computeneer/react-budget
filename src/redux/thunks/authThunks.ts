import {
  PayloadAction,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { IAuthRequest } from "models/IAuthUser";
import { ITokenResponse } from "models/IResponse";
import { loginRequest } from "redux/api/authApi";
import IAuthState from "redux/states/IAuthState";

export const authRequest = createAsyncThunk(
  "auth/login",
  async (loginInfo: IAuthRequest) => {
    const result = loginRequest(loginInfo)
      .then((res) => {
        sessionStorage.setItem("companyCode", loginInfo.companyCode);
        return res;
      })
      .catch((err) => err);
    return result;
  }
);

export const extraReducers = (builder: ActionReducerMapBuilder<IAuthState>) => {
  builder
    .addCase(
      authRequest.fulfilled,
      (state, action: PayloadAction<ITokenResponse>) => {
        if (action.payload.token) {
          sessionStorage.setItem("token", action.payload.token);
          const user = {
            username: action.payload.username!,
            email: action.payload.email || "",
            avatar: action.payload.avatar,
          };
          state.isAuthenticated = true;
          state.isLoading = false;
          state.token = action.payload.token;
          state.user = user;
          sessionStorage.setItem("user", JSON.stringify(user));
        } else {
          state.isLoading = false;
          state.isAuthenticated = false;
          state.token = undefined;
          state.user = undefined;
        }
      }
    )
    .addCase(authRequest.pending, (state) => {
      state.isLoading = true;
      state.token = undefined;
      state.isAuthenticated = false;
    })
    .addCase(authRequest.rejected, (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.token = undefined;
      state.user = undefined;
    });
};
