import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const userId = cookie.get("userId");
const token = cookie.get("userToken");

export const newPay = createAsyncThunk(
  "pay/newPay",
  async (items, { rejectWithValue, getState }) => {

    items.userId = userId;

    try {
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.post(
        "https://hotel-booking-api-theta.vercel.app/payment",
        items,
        head
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
