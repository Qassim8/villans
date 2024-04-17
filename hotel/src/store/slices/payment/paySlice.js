import { createSlice } from "@reduxjs/toolkit";
import { newPay } from "./payAPIs";

const initialState = {
  payment: null,
  load: false,
  success: false,
  error: false,
};

const paymentSlice = createSlice({
  name: "pay",
  initialState,
  reducers: {
    changeSuccess: (state) => {
      state.success = false;
    },
    changeError: (state) => {
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    //Make New Payment
    builder.addCase(newPay.pending, (state) => {
      state.load = true;
      state.success = false;
      state.error = false;
    });
    builder.addCase(newPay.fulfilled, (state, action) => {
      state.payment = action.payload;
      state.load = false;
      state.success = true;
      state.error = false;
    });
    builder.addCase(newPay.rejected, (state) => {
      state.load = false;
      state.success = false;
      state.error = true;
    });
  },
});

export const { changeSuccess , changeError} = paymentSlice.actions;
export default paymentSlice.reducer;
