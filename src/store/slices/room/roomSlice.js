import { createSlice } from "@reduxjs/toolkit";
import { getRoomId, getRooms } from "./room.apis";

const initialState = { room: null, roomInfo: null, loading: false };

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducer:{    
    clearState: (state) => {
      state.room = null;
    }},
  extraReducers: (builder) => {
    //Get All Hotels
    builder.addCase(getRooms.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.loading = false;
      state.room = action.payload;
    });
    builder.addCase(getRooms.rejected, (state) => {
      state.loading = false;
      state.room = null;
    });
    //Get Hotel With Defined Id
    builder.addCase(getRoomId.pending, (state) => {
      state.loading = true;
      state.roomInfo = null;
    });
    builder.addCase(getRoomId.fulfilled, (state, action) => {
      state.loading = false;
      state.roomInfo = action.payload;
    });
    builder.addCase(getRoomId.rejected, (state) => {
      state.loading = false;
      state.roomInfo = null;
    });
  },
});

export const {clearState} = roomSlice.actions;
export default roomSlice.reducer;
