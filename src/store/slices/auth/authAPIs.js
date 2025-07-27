import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from 'universal-cookie'
import axios from "axios";

const cookie = new Cookies();
export const userRegister = createAsyncThunk(
  "auth/register",
  async ({ username, email, password, role }, { rejectWithValue }) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://hotel-booking-api-theta.vercel.app/auth/register",
        { username, email, password, role },
        head
      );
      const data = await response.data;
      return data.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://hotel-booking-api-theta.vercel.app/auth/login",
        { email, password },
        head
      );
      const data = await response.data;
      // const response = await fetch(
      //   "https://hotel-booking-api-wnq6.onrender.com/auth/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email,
      //       password,
      //     }),
      //   }
      // )
      // let data = await response.json()
      if (data.token && data.user._id) {
        cookie.set("userToken", data.token, {path: '/'});
        cookie.set("userId", data.user._id, {path: '/'});
      }
        return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
