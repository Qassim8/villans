import { createSlice } from "@reduxjs/toolkit";
import { getHotelId, getHotels } from "./hotelAPIs";

const initialState = {hotel: null, hotelInfo: null, load: false};

const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    extraReducers : (builder) =>{
        //Get All Hotels
        builder.addCase(getHotels.fulfilled,(state, action) =>{
            state.hotel = action.payload;
        })
        //Get Hotel With Defined Id
        builder.addCase(getHotelId.pending, (state) =>{
            state.load = true;
        })
        builder.addCase(getHotelId.fulfilled, (state, action) =>{
            state.hotelInfo = action.payload;
            state.load = false;
        })
    }
}
);

export default hotelSlice.reducer;