import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const userId = cookie.get("userId");
const token = cookie.get("userToken");

export const addItem = createAsyncThunk(
  "fav/addItem",
  async (items, { rejectWithValue }) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.post(
        `https://hotel-booking-api-theta.vercel.app/favorites/${userId}`,
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

export const getItems = createAsyncThunk(
  "fav/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://hotel-booking-api-theta.vercel.app/favorites/${userId}`,
        head
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItems = createAsyncThunk(
  "fav/deleteItems",
  async (id, { rejectWithValue }) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      await axios.delete(
        `https://hotel-booking-api-theta.vercel.app/favorites/${userId}/${id}`,
        head
      );
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
