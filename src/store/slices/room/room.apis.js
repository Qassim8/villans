import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRooms = createAsyncThunk('room/getRooms', async(_,{rejectWithValue}) => {
    try{
        const response = await axios.get(
        "https://hotel-booking-api-wnq6.onrender.com/rooms"
        );
        const data = await response.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)}
});

export const getRoomId = createAsyncThunk('room/getRoomId', async(id, {rejectWithValue}) => {
    try{
        const response = await axios.get(
        `https://hotel-booking-api-wnq6.onrender.com/rooms/${id}`
        );
        const data = await response.data;
        return data;
    }catch(error){
        return rejectWithValue(error.message)}
})