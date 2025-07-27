import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRooms = createAsyncThunk('room/getRooms', async(_,{rejectWithValue}) => {
    try{
        const response = await axios.get(
          "https://hotel-booking-api-theta.vercel.app/rooms"
        );
        const data = await response.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)}
});

export const getRoomId = createAsyncThunk('room/getRoomId', async(id, {rejectWithValue}) => {
    try{
        if (id) {
            const response = await axios.get(
              `https://hotel-booking-api-theta.vercel.app/rooms/${id}`
            );
            const data = await response.data;
            return data;
        }
    }catch(error){
        return rejectWithValue(error.message)}
})