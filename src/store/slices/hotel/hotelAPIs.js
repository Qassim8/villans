import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHotels = createAsyncThunk(
  "hotels/getHotels",
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.get(
        "https://hotel-booking-api-theta.vercel.app/hotels"
      );
      const data = await response.data;
      if (response.status === 200) {
        return data.hotels;
      }
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const getHotelId = createAsyncThunk(
  "hotels/getHotelId",
  async (id, { rejectedWithValue }) => {
    try {
      if (id) {
        const response = await axios.get(
          `https://hotel-booking-api-theta.vercel.app/hotels/${id}`
        );
        const data = await response.data;
        return data;
      }
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
