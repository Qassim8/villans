import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const cookie = new Cookies();
const userId = cookie.get('userId');
const token = cookie.get('userToken');
const hotelId = localStorage.getItem('hotelId');
const roomId = localStorage.getItem('roomId');

export const newBooking = createAsyncThunk(
  "booking/newBooking",
  async (
    items,
    { rejectWithValue }
  ) => {
    items.userId = userId;
    items.hotelId = hotelId;
    items.roomId = roomId;

    try{
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
        const response = await axios.post(
          "https://hotel-booking-api-wnq6.onrender.com/booking",
          items,
          head
        );
        const data = await response.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)
    }
  }
);

export const getBooking = createAsyncThunk(
  "booking/getBooking",
  async (_, { rejectWithValue }) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://hotel-booking-api-wnq6.onrender.com/booking?userId=${userId}`,
        head
      );
      const data = await response.data
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBook = createAsyncThunk('booking/getBook', async(id, {rejectWithValue}) =>{
  try{
    const head = {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };
    const response = await axios.get(
      `https://hotel-booking-api-wnq6.onrender.com/booking/${id}`,
      head
    );
    const data = await response.data;
    return data;
  }catch(error){
    return rejectWithValue(error.message)
  }
})

export const updateBooking = createAsyncThunk(
  "booking/updateBooking",
  async (
    items,
    { rejectWithValue }
  ) => {
    try {
      const head = {
        headers: {
          "Content-type": "application/json",
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.put(
        `https://hotel-booking-api-wnq6.onrender.com/booking/${items.id}`,
        items,
        head
      );
        const data = await response.data
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBooking = createAsyncThunk('booking/deleteBooking', async(id, {rejectWithValue}) =>{
  try{
    const head = {
      headers: {
        "Content-type": "application/json",
        Authorization: `bearer ${token}`,
      },
    };
    await axios.delete(
      `https://hotel-booking-api-wnq6.onrender.com/booking/${id}`,
      head
    );
    return id;
  }catch(error){
    return rejectWithValue(error.message)
  }
})
