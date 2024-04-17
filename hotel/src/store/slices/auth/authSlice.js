import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./authAPIs";
import Cookies from "universal-cookie";

const initialState = {
  loading: false,
  error: false,
  erorr: false,
  success: false,
  userInfo: null
};

const cookie = new Cookies();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearSucces: (state) => {
      state.success = false;
      state.userInfo = null;
    },
    clearError: (state) =>{
      state.error = false;
      state.erorr = false;
    },
    logOut: () =>{
      cookie.remove("userToken");
      cookie.remove("userId");
    }
  },
  extraReducers: (builder) => {
    //register thunk
    builder.addCase(userRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userRegister.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    });
    // Login thunk
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.erorr = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.user;
      state.erorr = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.erorr = action.payload;
    });
  },
});

export const {clearSucces, clearError, logOut} = authSlice.actions;
export default authSlice.reducer;
